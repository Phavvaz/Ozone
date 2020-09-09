import { storage } from './firebase';

export const process = (
  fieldName,
  file,
  metadata,
  load,
  error,
  progress,
  abort
) => {
  const storageRef = storage().ref();
  const task = storageRef
    .child(`admin/${file.name}`)
    .put(file, {
      contentType: 'image/jpeg'
    });
  // console.log(task);
  task.on(
    'state_changed',
    snap => {
      // provide progress updates
      progress(
        true,
        snap.bytesTransferred,
        snap.totalBytes
      );
    },
    err => {
      error(err.message);
      abort();
      // console.log(err);
    },
    () => {
      // the file has been uploaded
      load(file.name);
      console.log(file);
    }
  );
};

export const loadImg = (
  source,
  load,
  error,
  progress,
  abort
) => {
  // reset our progress
  progress(true, 0, 1024);

  // fetch the download URL from firebase
  storage()
    .ref()
    .child(`admin/${source}`)
    .getDownloadURL()
    .then(url => {
      // fetch the actual image using the download URL
      // and provide the blob to FilePond using the load callback
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        let blob = xhr.response;
        load(blob);
      };
      xhr.open('GET', url);
      xhr.send();
    })
    .catch(err => {
      error(err.message);
      abort();
    });
};

export const revert = (uniqueFileId, load, error) => {
  const storageRef = storage()
    .ref()
    .child(`admin/${uniqueFileId}`);
  storageRef
    .delete()
    .then(() => {
      console.log('file removed successfully');
      load();
    })
    .catch(err => error(err));
};

export const restore = (
  uniqueFileId,
  load,
  error,
  progress,
  abort,
  headers
) => {
  progress(true, 0, 1024);
  storage()
    .ref()
    .child(`admin/${uniqueFileId}`)
    .getDownloadURL()
    .then(url => {
      // fetch the actual image using the download URL
      // and provide the blob to FilePond using the load callback
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        let blob = xhr.response;
        load(blob);
      };
      xhr.open('GET', url);
      xhr.send();
    })
    .catch(err => {
      error(err.message);
      abort();
    });
};
