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
import Spinner from '../../../../components/spinner/spinner';
import Contain from '../../../../components/contain/contain';
import styles from './Addfruit.module.scss';

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
    }
  });
  return (
    <div className={styles.AddFruit}>
      <Contain>
        <form
          onSubmit={formik.handleSubmit}
          className={styles.AddFruitForm}
        >
          <div className={styles.AddFruitInput}>
            <label htmlFor="name">Name</label>
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
            <div className={styles.AddFruitError}>
              {formik.errors.name}
            </div>
          ) : null}

          <div className={styles.AddFruitInput}>
            <label htmlFor="description">Description</label>
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
            <div className={styles.AddFruitError}>
              {formik.errors.description}
            </div>
          ) : null}

          <div className={styles.AddFruitInput}>
            <label htmlFor="price">Price</label>
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
            <div className={styles.AddFruitError}>
              {formik.errors.price}
            </div>
          ) : null}

          <div>
            <label htmlFor="image">Fruit Image</label>
            <FilePond
              className={styles.AddFruitFile}
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

          {loadingState ? <Spinner /> : null}

          <div>{formError}</div>

          <button
            className={styles.AddFruitBtn}
            type="submit"
          >
            Add
          </button>
        </form>
      </Contain>
    </div>
  );
};

export default AddFruit;
