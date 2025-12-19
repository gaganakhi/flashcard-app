import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addFlashcard } from "../redux/flashcardSlice";
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const schema = Yup.object({
  title: Yup.string().required("Title is required"),
  description: Yup.string().required("Description is required"),
  terms: Yup.array().of(
    Yup.object({
      term: Yup.string().required("Term is required"),
      definition: Yup.string().required("Definition is required"),
    })
  ),
});

export default function FlashcardForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        terms: [{ term: "", definition: "" }],
      }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        const id = Date.now();

        // Save flashcard
        dispatch(addFlashcard({ ...values, id }));

        // Reset form
        resetForm();

        // Redirect to My Flashcards
        navigate("/flashcards");
      }}
    >
      {({ values }) => (
        <Form className="bg-white rounded-xl shadow-lg p-6 space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Flashcard Details
            </h3>
          </div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <Field
              name="title"
              placeholder="Enter flashcard title"
              className="input-field mt-1"
            />
            <ErrorMessage
              name="title"
              component="p"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <Field
              as="textarea"
              name="description"
              rows={3}
              placeholder="Short description"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2
                         focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
            />
            <ErrorMessage
              name="description"
              component="p"
              className="text-sm text-red-500 mt-1"
            />
          </div>

          {/* Terms */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-800">Terms</h4>

            <FieldArray name="terms">
              {({ push, remove }) => (
                <div className="space-y-4">
                  {values.terms.map((_, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-6 gap-3
                                 bg-gray-50 p-4 rounded-lg border"
                    >
                      {/* Term */}
                      <div className="md:col-span-2">
                        <label className="text-sm font-medium text-gray-700">
                          Term
                        </label>
                        <Field
                          name={`terms.${index}.term`}
                          placeholder="Term"
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2
                                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                        <ErrorMessage
                          name={`terms.${index}.term`}
                          component="p"
                          className="text-xs text-red-500 mt-1"
                        />
                      </div>

                      {/* Definition */}
                      <div className="md:col-span-3">
                        <label className="text-sm font-medium text-gray-700">
                          Definition
                        </label>
                        <Field
                          name={`terms.${index}.definition`}
                          placeholder="Definition"
                          className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2
                                     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        />
                        <ErrorMessage
                          name={`terms.${index}.definition`}
                          component="p"
                          className="text-xs text-red-500 mt-1"
                        />
                      </div>

                      {/* Actions */}
                      <div className="flex items-end justify-end gap-3">
                        <button
                          type="button"
                          title="Edit term"
                          className="p-2 rounded-md border text-gray-600
                                     hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                          <FiEdit2 size={16} />
                        </button>

                        {values.terms.length > 1 && (
                          <button
                            type="button"
                            title="Delete term"
                            onClick={() => remove(index)}
                            className="p-2 rounded-md border text-red-500
                                       hover:bg-red-50 transition"
                          >
                            <FiTrash2 size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}

                  <button
                    type="button"
                    onClick={() => push({ term: "", definition: "" })}
                    className="text-blue-600 text-sm font-medium hover:underline"
                  >
                    + Add another term
                  </button>
                </div>
              )}
            </FieldArray>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t">
            <button
              type="submit"
              className="w-full md:w-auto bg-blue-600 text-white
                         px-6 py-2 rounded-md font-medium
                         hover:bg-blue-700 transition"
            >
              Create Flashcard
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
