"use client";
import { useEffect, useState, React, useRef } from "react";
import { initJuno } from "@junobuild/core-peer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "../../../components/Button";
import Edit from "../../../assets/edit.svg";
import * as Yup from "yup";
import { uploadFile, setDoc } from "@junobuild/core-peer";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { root } from "../../../../store";
import { setEditUser, setUserProfile } from "../../../../slices/userSlices";
import Link from "next/link";
// import { toast } from "sonner";
import {  toast } from "react-toastify";
const Page = () => {
  const user = useSelector((state) => state.persistedReducer.user.userValue);
  const userProfile = useSelector(
    (state) => state.persistedReducer.user.userProfile
  );
  const edit = useSelector((state) => state.persistedReducer.user.editUser);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [profileImg, setProfileImg] = useState(
    userProfile?.profilePicUrl || null
  );

  const fileInputRef = useRef(null);

  useEffect(() => {
    const initializeJuno = async () => {
      try {
        await initJuno({
          satelliteId: "tw7oh-ryaaa-aaaal-adoya-cai",
        });
      } catch (error) {
        console.error("Error initializing Juno:", error);
      }
    };

    initializeJuno();
  }, []);

  const handleImageChange = (event) => {
    const file = event.currentTarget.files[0];
    setProfileImg(file);

    if (file) {
      const reader = new FileReader();
      console.log(reader);

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleUploadButtonClick = () => {
    fileInputRef.current.click();
  };

  const initialValues = {
    firstName: userProfile?.firstName || "",
    lastName: userProfile?.lastName || "",
    bio: userProfile?.bio || "",
    email: userProfile?.email || "",
    phoneNumber: userProfile?.phoneNumber || "",
    website: userProfile?.website || "",
    fileDoc: userProfile?.powUrl || null,
    profileImageDoc: userProfile?.profilePicUrl || "",
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
    console.log(typeof values.fileDoc);

    setLoading(true);
    {
      let url;
      let ImageUrl;

      try {
        // Handle file upload logic
        if (typeof values.fileDoc == "object") {
          const filename = `${user.key}-${values.fileDoc.name}`;
          console.log("Uploading file document...")
          const { downloadUrl } = await uploadFile({
            collection: "userProfile-document",
            data: values.fileDoc,
            filename,
          });
          url = downloadUrl;
        }

        if (typeof profileImg === "object") {
          const filename = `${user.key}-${profileImg.name}`;
          console.log("Uploading profile image...")
          const { downloadUrl } = await uploadFile({
            collection: "userProfile-photo",
            data: profileImg,
            filename,
          });
          ImageUrl = downloadUrl;
        }

        console.log(url, ImageUrl);

        const value = {
          _id: user.owner,
          firstName: values.firstName,
          lastName: values.lastName,
          bio: values.bio,
          email: values.email,
          phoneNumber: values.phoneNumber,
          website: values.website,
          powUrl: url || userProfile?.powUrl,
          profilePicUrl: ImageUrl || userProfile?.profilePicUrl,
        };

        console.log(value);

        const response = await fetch(
          `https://verxio-backend.vercel.app/api/v1/profiles`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(value),
          }
        );
        const data = await response.json();
        if (data.success === true) {
          console.log("Profile updated successfully:", data);
          dispatch(setUserProfile(data.user));
          dispatch(setEditUser(false))
          toast.success(`${data.message}`);
        } else{
          toast.error(`${data.message}`)
        }
        // Handle success response here
      } catch (error) {
        console.error("Upload Error:", error);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex relative justify-center">
        <div className="w-[200px] h-[200px] bg-slate-500  border-[8px] border-white rounded-full absolute -top-[100px]">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="profile picture"
              width={200}
              height={200}
              className="w-full h-full rounded-full bg-cover"
            />
          )}
          {edit && (
            <div
              className="bg-white p-[10px] rounded-full z-20 absolute -right-2 shadow-md top-[124px] cursor-pointer "
              onClick={handleUploadButtonClick}
            >
              <Image src={Edit} alt="Edit image" className=" w-6" />
            </div>
          )}
        </div>
        <input
          name="profileImageDoc"
          type="file"
          // capture="environment"
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>
      <div className=" px-[90px] py-[50px]">
        <Formik
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={validationchema}
        >
          {({ isValid, handleSubmit, values, dirty, setFieldValue }) => (
            <Form className={` mt-16  w-[80%] `}>
              <div
                className={`${
                  !edit && "grid grid-cols-2 mt-16"
                } flex flex-col gap-5 mb-5 mt-5`}
              >
                <div className="flex flex-col gap-3 text-16">
                  <label
                    htmlFor="firstName"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    First Name
                  </label>
                  {edit ? (
                    <Field
                      name="firstName"
                      placeholder="John"
                      className="border outline-none rounded-[4px] border-black p-2"
                    />
                  ) : (
                    <p className="text-[17px] text-black capitalize">
                      {userProfile?.firstName}
                    </p>
                  )}
                  <ErrorMessage name="firstName" component={Error} />
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="lastName"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    Last Name
                  </label>
                  {edit ? (
                    <Field
                      placeholder="Doe"
                      name="lastName"
                      className="border outline-none rounded-[4px] border-black p-2"
                    />
                  ) : (
                    <p className="text-[17px] text-black capitalize">
                      {userProfile?.lastName}
                    </p>
                  )}
                  <ErrorMessage name="lastName" component={Error} />
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="bio"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    Bio
                  </label>
                  {edit ? (
                    <Field
                      placeholder="Tell us about you"
                      name="bio"
                      as="textarea"
                      className="border outline-none rounded-[4px] border-black p-2 max-h-[90px]"
                    />
                  ) : (
                    <p className="text-[17px] text-black ">
                      {userProfile?.bio}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="email"
                    className={`${
                      !edit && "text-[19px] font-semibold text-black mb-[-10px]"
                    }`}
                  >
                    Contact Email
                  </label>
                  {edit ? (
                    <Field
                      placeholder="johndoe@gmail.com"
                      name="email"
                      className="border outline-none rounded-[4px] border-black p-2"
                    />
                  ) : (
                    <p className="text-[17px] text-black">
                      {userProfile?.email}
                    </p>
                  )}
                  <ErrorMessage name="email" component={Error} />
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="phoneNumber"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    Phone Number
                  </label>
                  {edit ? (
                    <Field
                      placeholder="123-456-7890"
                      name="phoneNumber"
                      className="border outline-none rounded-[4px] border-black p-2"
                    />
                  ) : (
                    <p className="text-[17px] text-black capitalize">
                      {userProfile?.phoneNumber}
                    </p>
                  )}
                  <ErrorMessage name="phoneNumber" component={Error} />
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="website"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    Website
                  </label>
                  {edit ? (
                    <Field
                      placeholder="www.insertyourlink.com"
                      name="website"
                      className="border outline-none rounded-[4px] border-black p-2"
                    />
                  ) : (
                    userProfile?.website && (
                      <Link
                        // target={userProfile?.website}
                        href={`https://${userProfile?.website}`}
                        className="text-[17px] text-black"
                      >
                        {userProfile?.website}
                      </Link>
                    )
                  )}
                  <ErrorMessage name="website" component={Error} />
                </div>
                <div className="flex flex-col gap-3 text-16 ">
                  <label
                    htmlFor="fileDoc"
                    className={`${
                      !edit &&
                      "text-[19px] font-semibold text-gray-800 mb-[-10px]"
                    }`}
                  >
                    Upload file (doc, pdf, png, jpg, etc.)
                  </label>
                  {edit ? (
                    <input
                      name="fileDoc"
                      className="border outline-none rounded-[4px] border-black p-2"
                      type="file"
                      onChange={(event) =>
                        setFieldValue("fileDoc", event.currentTarget.files[0])
                      }
                    />
                  ) : (
                    userProfile?.powUrl && (
                      <Link
                        href={userProfile?.powUrl}
                        className="border p-3 bg-white shadow-md font-semibold mt-3"
                      >
                        Uploaded Document
                      </Link>
                    )
                  )}
                  <ErrorMessage name="fileDoc" component={Error} />
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                {edit && (
                  <Button
                    name="cancel"
                    className="w-[50%]"
                    type="button"
                    onClick={() => dispatch(setEditUser(false))}
                  />
                )}
                <div className="w-[100%]">
                  <Button
                    type="button"
                    // color="primary"
                    className="w-full"
                    isLoading={loading}
                    onClick={() => {
                      if (edit) {
                        if (isValid && dirty) {
                          submitValue(values);
                        }
                      } else {
                        dispatch(setEditUser(true));
                      }
                    }}
                    name={!edit ? "Edit" : "Submit"}
                  />
                </div>
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
