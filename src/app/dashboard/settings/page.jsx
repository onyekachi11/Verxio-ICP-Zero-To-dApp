"use client";
import { useContext, useEffect, useState,  React } from "react";
import { authSubscribe, listDocs } from "@junobuild/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../components/Button";
import * as Yup from "yup";
import { uploadFile, setDoc } from "@junobuild/core";
import { nanoid } from "nanoid";
import { LoadingButton } from "@mui/lab";

const Page = () => {
  const [user, setUser] = useState();
  const [userDetailHistory, setuserDetailHistory] = useState([])
  const [userProfile, setuserProfile] = useState()
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = authSubscribe((newUser) => {
      setUser(newUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const list = async () => {
    try {
      const { items } = await listDocs({
        collection: "userProfile-details",
      });
      setuserDetailHistory(items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (user) {
      list();
    }
  }, [user]);

  const lastUserDetails = userDetailHistory[0];
  let userProfileDetails;
// Check if the object is not null or undefined
  if (typeof lastUserDetails === 'object') {
        userProfileDetails = {
        ...lastUserDetails.data,
        owner: lastUserDetails.owner 
    };
    } 
  
  console.log("User Profile", userProfileDetails);

  const initialValues = {
    firstName: "",
    lastName: "",
    bio: "",
    email: '',
    phoneNumber: "",
    website: "",
    fileDoc: "",
    profileImageDoc: "",
  };

  const validationchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    bio: Yup.string().required("Bio is required"),
    email: Yup.string().required("Email is required"),
    phoneNumber: Yup.number("value must be a number").required(
      "Please input number"
    ),
    fileDoc: Yup.string().required("Please upload necessary doc"),
  });

  const submitValue = async (values) => {
    {
      // console.log("Form values:", values);
      let url; 
      let ImageUrl;
      try {
        // Handle file upload logic
        if (values.fileDoc !== undefined) {
          const filename = `${user.key}-${values.fileDoc.name}`;
          const { downloadUrl } = await uploadFile({
            collection: "userProfile-document",
            data: values.fileDoc,
            filename,
          });
          url = downloadUrl;
        }

        if (values.profileImageDoc !== undefined) {
          const filename = `${user.key}-${values.profileImageDoc.name}`;
          const { downloadUrl } = await uploadFile({
            collection: "userProfile-photo",
            data: values.fileDoc,
            filename,
          });
          ImageUrl = downloadUrl;
        }

        // Access the download URL and other form values here
          console.log("Stored on the Juno Storage...");
          console.log("Download URL:", url);

        await setDoc({
          collection: "userProfile-details",
          doc: {
            key: nanoid(),
            data: {
            firstName: values.firstName,
            lastName: values.lastName,
            bio: values.bio,
            email: values.email,
            phoneNumber: values.phoneNumber,
            website: values.website,
            fileDoc: url,
            profileImageDoc: ImageUrl
            },
          },
        });

        console.log("Profile upload successful!...");

        // Now you can perform additional submit logic, e.g., send data to the server
      } catch (error) {
        console.error("Upload Error:", error);
      }
    }
  };



  return (
    <>
      <div className="border rounded-[8px] px-[90px] py-[50px]">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationchema}
        >
          {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
            <Form className="mt-6 flex flex-col gap-5 w-[80%]">
              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="firstName">First Name</label>
                <Field
                  name="firstName"
                  className="border outline-none rounded-[4px] border-black p-2"
                />
                <ErrorMessage name="firstName" component={Error} />
              </div>
              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="lastName">Last Name</label>
                <Field
                  name="lastName"
                  className="border outline-none rounded-[4px] border-black p-2"
                />
                <ErrorMessage name="lastName" component={Error} />
              </div>

              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="bio">Bio</label>
                <Field
                  name="bio"
                  as="textarea"
                  className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
                />
              </div>

              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="email">Contact Email</label>
                <Field
                  name="email"
                  className="border outline-none rounded-[4px] border-black p-2"
                />
                <ErrorMessage name="email" component={Error} />
              </div>

              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="phoneNumber">Phone Number</label>
                <Field
                  name="phoneNumber"
                  className="border outline-none rounded-[4px] border-black p-2"
                />
                <ErrorMessage name="phoneNumber" component={Error} />
              </div>
              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="website">Website</label>
                <Field
                  name="website"
                  className="border outline-none rounded-[4px] border-black p-2"
                />
                <ErrorMessage name="website" component={Error} />
              </div>

              <div className="flex flex-col gap-3 text-16 ">
                <label htmlFor="fileDoc">
                  Upload file (doc, pdf, png, jpg, etc.)
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
                  name="Update Profile"
                  className="mt-8 w-full "
                  onClick={() => {
                    if (isValid && dirty) {
                      // console.log(values);
                      submitValue(values);
                    }
                  }}
                />
                {/* <LoadingButton
                type="submit"
                variant="contained"
                // color="primary"
                className="mt-8 w-full"
                loading={loading}
                onClick={() => {
                  if (isValid && dirty) {
                    submitValue(values);
                    setLoading(true);
                  }
                }}
                >
                Submit
              </LoadingButton> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Page;

const Error = ({ children }) => {
  return <p className="text-red-400  text-[12px] mt-[-5px]">{children}</p>;
};
