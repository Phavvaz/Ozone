/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  useDispatch,
  useSelector,
  shallowEqual
} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import {
  process,
  loadImg,
  revert,
  restore
} from '../../../../filepondServer';
import * as action from '../../../../store/index';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview
);

const AddFruit = () => {
  const [imgUpload, setImgUpload] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //   const location = useLocation();
  const loadingState = useSelector(
    state => state.fruits.loading,
    shallowEqual
  );
  const formError = useSelector(
    state =>
      state.fruits.error
        ? state.fruits.error.message
        : null,
    shallowEqual
  );
  const Validation = Yup.object({
    name: Yup.string().required(
      "Fruit's name cannnot be empty"
    ),
    description: Yup.string().required(
      "Fruit's description cannot be empty"
    ),
    price: Yup.number().required(
      "Fruit's price cannot be empty"
    )
  });
  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: ''
    },
    validationSchema: Validation,
    onSubmit: values => {
      console.log(values);
      const name = values.name;
      const description = values.description;
      const price = values.price;
      dispatch(
        action.addFruit({ name, description, price })
      );
      if (formError) {
        return;
      } else {
        navigate('../../fruit');
      }

      // try {
      //   dispatch(
      //     action.addFruit({ name, description, price })
      //   );
      // } catch (error) {
      //   console.log(error);
      //   return;
      // } finally {
      //   navigate('../../fruit');
      // }
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
        </div>
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}

        <div>
          <label htmlFor="description">Description</label>
        </div>
        <div>
          <textarea
            id="description"
            name="description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
        </div>
        {formik.touched.description &&
        formik.errors.description ? (
          <div>{formik.errors.description}</div>
        ) : null}

        <div>
          <label htmlFor="price">Price</label>
        </div>
        <div>
          <input
            id="price"
            name="price"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.price}
          />
        </div>
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <div>
          <label htmlFor="image">Fruit Image</label>
        </div>

        <div>
          <FilePond
            files={imgUpload}
            onupdatefiles={fileItems => {
              // if (fileItems.length === 0) {
              //   onRequestClear();
              // }
              setImgUpload(
                fileItems.map(fileItem => fileItem.file)
              );
            }}
            allowMultiple={true}
            maxFiles={5}
            server="/api"
            name="files"
            labelIdle='Drag and Drop your files or <span class="filepond--label-action">Browse</span>'
            server={{
              process: (
                fieldName,
                file,
                metadata,
                load,
                error,
                progress,
                abort
              ) => {
                process(
                  fieldName,
                  file,
                  metadata,
                  load,
                  error,
                  progress,
                  abort
                );
              },
              load: (
                source,
                load,
                error,
                progress,
                abort
              ) => {
                loadImg(
                  source,
                  load,
                  error,
                  progress,
                  abort
                );
              },
              restore: (
                uniqueFileId,
                load,
                error,
                progress,
                abort,
                headers
              ) => {
                restore(
                  uniqueFileId,
                  load,
                  error,
                  progress,
                  abort,
                  headers
                );
              },
              revert: (uniqueFileId, load, error) => {
                if (formError) {
                  revert(uniqueFileId, load, error);
                }
              }
            }}
          />
        </div>

        {loadingState ? (
          <div>
            <h1>Spinner</h1>
          </div>
        ) : null}

        <div>{formError}</div>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddFruit;
