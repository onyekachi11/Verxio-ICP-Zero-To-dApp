"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, {useState} from "react";
import * as Yup from "yup";
import Button from "../../../components/Button";

const Page = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const initialValues = {
    videoTitle: "",
    videoLink: "",
    quiz: "",
  };

  const validationchema = Yup.object().shape({
    videoTitle: Yup.string().required("Video title is required"),
    videoLink: Yup.string().required("Upload a video or add a link"),
    // quiz: Yup.string().required("Requirement is required"),
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoUrl(url);

    console.log(file)
    console.log(url)
  };

    const handleDrop = (event) => {
      event.preventDefault();
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    };

    const handleDragOver = (event) => {
      event.preventDefault();
    };

  return (
    <div className="m-3 border px-[48px] py-[12px] rounded-xl">
      <div className="border text-center w-full py-[65px] px-[94px] font-semibold text-[32px] text-white rounded-lg settings-bg-img bg-no-repeat bg-cover  bg-[rgba(0,0,0,0.1)] mb-7">
        What{" "}
        <span className="text-[#00ADEF] border-b-[2px] border-[#00ADEF] italic">
          video lesson
        </span>{" "}
        do you want to post today?
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationchema}
      >
        {({ isValid, values, dirty }) => (
          <Form className="flex flex-col gap-4 mx-9">
            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="videoTitle">Video Title</label>
              <Field
                name="videoTitle"
                placeholder="title"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="videoTitle" component={Error} />
            </div>
            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="videoLink">Video Link</label>
              <Field
                name="videoLink"
                placeholder="www.video.com"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="videoLink" component={Error} />
            </div>
            {/* <p className="mx-auto">or</p> */}
            <div className=" border flex items-center justify-center p-[100px] rounded-[4px] border-black">
              <p>Drag and drop video</p>
            </div>
            <div onDrop={handleDrop} onDragOver={handleDragOver}>
              <input type="file" accept="video/*" onChange={handleFileChange} />
              {videoUrl && (
                <video controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="border my-9"></div>
            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="quiz">Quiz</label>
              <Field
                name="quiz"
                as="textarea"
                placeholder="type your question"
                className="border outline-none rounded-[4px] border-black p-2 min-h-[300px]"
              />
              <ErrorMessage name="quiz" component={Error} />
            </div>
            <div>
              <Button
                type="submit"
                name="Submit"
                className="mt-8 w-full "
                onClick={() => {
                  if (isValid && dirty) {
                    console.log(values);
                  }
                }}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Page;

const Error = ({ children }) => {
  return <p className="text-red-400  text-[12px] mt-[-5px]">{children}</p>;
};
