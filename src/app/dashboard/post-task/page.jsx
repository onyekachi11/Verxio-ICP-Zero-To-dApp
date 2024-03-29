"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../components/Button";
import * as Yup from "yup";
import { uploadFile, setDoc } from "@junobuild/core-peer";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useState } from "react";

const Page = () => {
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );

  const user = useSelector((state) => state.persistedReducer.user.userValue);

  const [loading, setLoading] = useState(false);

  const initialValues = {
    title: "",
    description: "",
    responsibilities: "",
    requirements: "",
    reward: "",
    jobType: "",
    paymentMethod: "",
    totalPeople: "",
    amount: "",
    fileDoc: "",
  };

  const validationchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    responsibilities: Yup.string().required("Responsibilities is required"),
    requirements: Yup.string().required("Requirement is required"),
    reward: Yup.string().required("Reward is required"),
    jobType: Yup.string().required("Job type is required"),
    paymentMethod: Yup.string().required("Please select payment method"),
    totalPeople: Yup.number("value must be a number").required(
      "Please input amount"
    ),
    amount: Yup.number("value must be a number").required(
      "Please input amount"
    ),
    fileDoc: Yup.string().required("Please upload necessary doc"),
  });

  const submitValue = async (values) => {
    setLoading(true);
    {
      console.log("Form values:", values);
      let url;
      try {
        // Handle file upload logic
        if (values.fileDoc !== undefined) {
          const filename = `${user.key}-${values.fileDoc.name}`;
          const { downloadUrl } = await uploadFile({
            collection: "publish-document",
            data: values.fileDoc,
            filename,
          });
          url = downloadUrl;
        }

        // Access the download URL and other form values here
        console.log("upload successful!...");
        console.log("Download URL:", url);

        await setDoc({
          collection: "publish-task",
          doc: {
            key: nanoid(),
            data: {
              title: values.title,
              description: values.description,
              responsibilities: values.responsibilities,
              requirements: values.requirements,
              rewardStructure: values.reward,
              jobType: values.jobType,
              paymentMethod: values.paymentMethod,
              totalPeople: values.totalPeople,
              amount: values.amount,
              ...(url !== undefined && { url }),
            },
          },
        });

        // console.log("Task upload successful!...");
        toast.success("Task uploaded successfully.");
        setLoading(false);

        // Now you can perform additional submit logic, e.g., send data to the server
      } catch (error) {
        console.error("File Error:", error);
        toast.error('Task Upload Failed')
        setLoading(false);
      }
    }
  };

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
        {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
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
                className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
              />
              <ErrorMessage name="description" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="responsibilities">
                Enter Task Responsibilities
              </label>
              <Field
                name="responsibilities"
                as="textarea"
                className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
              />
              <ErrorMessage name="responsibilities" component={Error} />
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
              <label htmlFor="requirements">How Will Reward Be Shared?</label>
              <Field
                as="textarea"
                name="reward"
                className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
              />
              <ErrorMessage name="reward" component={Error} />
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
                <option value="USDT">USDT</option>
                <option value="USDC">USDC</option>
                <option value="etherum">Ethereum</option>
                <option value="solana">Solana</option>
              </Field>
              <ErrorMessage name="paymentMethod" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="totalPeople">
                How Many People Are Required For The Task?
              </label>
              <Field
                name="totalPeople"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="totalPeople" component={Error} />
            </div>

            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="amount">Enter Prize Pool Amount</label>
              <Field
                name="amount"
                className="border outline-none rounded-[4px] border-black p-2"
              />
              <ErrorMessage name="amount" component={Error} />
            </div>
            <div className="flex flex-col gap-3 text-16 ">
              <label htmlFor="fileDoc">
                Upload File (doc, pdf, png, jpg, etc.)
              </label>
              <input
                name="fileDoc"
                className="border outline-none rounded-[4px] border-black p-2"
                type="file"
                onChange={(event) =>
                  setFieldValue("fileDoc", event.currentTarget.files[0])
                }
              />
              <ErrorMessage name="fileDoc" component={Error} />
            </div>
            <div>
              <Button
                type="submit"
                name="Submit"
                isLoading={loading}
                className="mt-8 w-full "
                onClick={() => {
                  if (isValid && dirty) {
                    // console.log(values);
                    submitValue(values);
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
