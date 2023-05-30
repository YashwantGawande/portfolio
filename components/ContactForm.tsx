"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { useWindowSize } from "usehooks-ts";
import { ToastContainer, toast } from "react-toastify";
import Confetti from "react-confetti";

import { validationSchema } from "@/utils/validations";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
      resetForm,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: () => void;
    }
  ) => {
    try {
      setIsLoading(true);
      // Send email using Nodemailer
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      // Reset the form
      resetForm();

      // Show success message or redirect to a thank you page
      toast.success("Form submitted successfully!");
      setShowConfetti(true);
      console.log(showConfetti)
      console.log("Email sent successfully!");
    } catch (error) {
      // Handle error
      console.error("Failed to send email:", error);
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={toFormikValidationSchema(validationSchema)}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mx-auto lg:w-2/3">
            <div className="flex flex-wrap">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 md:text-lg">Name</label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none md:text-xl dark:bg-transparent focus:border-primary-purple focus:bg-white focus:ring-2 focus:ring-secondary-pink"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <label className="text-sm leading-7 md:text-lg">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-1 text-base leading-8 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none md:text-xl dark:bg-transparent focus:border-primary-purple focus:bg-white focus:ring-2 focus:ring-secondary-pink"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <div className="relative">
                  <label className="text-sm leading-7 md:text-lg">Message</label>
                  <Field
                    id="message"
                    name="message"
                    as="textarea"
                    className="w-full h-32 px-3 py-1 text-base leading-6 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none resize-none md:text-xl dark:bg-transparent focus:border-primary-purple focus:bg-white focus:ring-2 focus:ring-secondary-pink"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="w-full p-2">
                <button
                  disabled={isLoading}
                  className="flex px-8 py-2 mx-auto text-lg text-white border-0 rounded bg-primary-purple focus:outline-none hover:bg-secondary-pink"
                >
                  Button
                </button>
              </div>
            </div>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {showConfetti && (
        <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
      )}
    </>
  );
};

export default ContactForm;
