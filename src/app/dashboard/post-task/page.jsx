"use client";

import React from "react";
// import { Field, Form, Formik } from 'formik';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../components/Button";
import * as Yup from "yup";

const page = () => {
  const initialValues = {
    title: "",
    description: "",
    responsibilities: "",
    requirements: "",
    jobType: "",
    paymentMethod: "",
    totalPeople: "",
    amount: "",
    fileDoc: "",
  };

  const  value = Object.keys(initialValues)
  console.log(value[1])

  const validationchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    requirements: Yup.string().required("Requirement is required"),
    jobType: Yup.string().required("Job type is required"),
    paymentMethod: Yup.string().required("Please select payment method"),
    amount: Yup.number("value must be a number").required(
      "Please input amount"
    ),
    fileDoc: Yup.string().required("Please upload necessary doc"),
  });

  return (
    <div className="border rounded-[8px] px-[90px] py-[50px]">
      <div className="border text-center w-full py-[65px] px-[94px] font-semibold text-[32px] rounded-lg bg-post-hero-img bg-no-repeat bg-cover  bg-[rgba(0,0,0,0.1)]">
        What{" "}
        <span className="text-[#00ADEF] border-b-[2px] border-[#00ADEF] italic">
          work call
        </span>{" "}
        do you have in mind today?
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={validationchema}
      >
        {({ isValid, handleSubmit }) => (
          <Form className="mt-6 flex flex-col gap-5 w-[80%]">
            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="title">Enter Task Title</label>
              <Field
                name="title"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="title" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="description">Enter Task Description</label>
              <Field
                name="description"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="description" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="responsibilities">Enter Task Responsibilities</label>
              <Field
                name="responsibilities"
                as="textarea"
                className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
              />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="requirements">Enter Task Requirements</label>
              <Field
                as="textarea"
                name="requirements"
                className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
              />
              <ErrorMessage name="requirements" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="jobType">Task Type</label>
              <Field
                name="jobType"
                as="select"
                className="border outline-none rounded-[4px] border-black p-2"
              >
                <option value="">select task type</option>
                <option value="quest">Quest</option>
                <option value="bounty">Bounty</option>
                <option value="contract">Contract</option>
                <option value="fulltime">Full Time</option>
              </Field>
              <ErrorMessage name="jobType" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="paymentMethod">Payment Token</label>
              <Field
                name="paymentMethod"
                as="select"
                className="border outline-none rounded-[4px] border-black p-2"
              >
                <option value="">select payment token eg. ICP</option>
                <option value="icp">ICP</option>
                <option value="etherum">Ethereum</option>
                <option value="solana">Solana</option>
              </Field>
              <ErrorMessage name="paymentMethod" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="totalPeople">How many people are required for the task?</label>
              <Field
                name="totalPeople"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="totalPeople" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="amount">Enter payment amount</label>
              <Field
                name="amount"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="amount" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="fileDoc">Upload file (doc, pdf, )</label>
              <Field
                type="file"
                name="fileDoc"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="fileDoc" component={Error} />
            </div>
            <div>
              <Button
                name="Submit"
                className="mt-8 w-full "
                onClick={() => isValid && handleSubmit()}
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;

const Error = ({ children }) => {
  return <p className="text-red-400  text-[12px] mt-[-5px]">{children}</p>;
};
