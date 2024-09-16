import { FlatFormProps } from '../../../models/forms.ts'
import FormContainer from '../userSignUpForms/FormContainer.tsx'

//New flat create form
export default function FlatFormPage2({
  title,
  description,
  updateFields,
}: FlatFormProps) {
  description
  return (
    <div className="mx-auto mt-10 flex w-full max-w-4xl flex-col items-center justify-center gap-10">
      <FormContainer title="Flat Setup">
        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="firstName">
            What is your flats nickname?
          </label>
          <div className="tailwind placeholder">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              value={title}
              onChange={(e) => updateFields({ title: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>

        <div className="form-control mb-4 w-full">
          <label className="label-text" htmlFor="lastName">
            Sum your flat up in a sentence!
          </label>
          <div className="tailwind placeholder">
            <input
              id="description"
              name="description"
              type="text"
              placeholder="Flat Description"
              value={description}
              onChange={(e) => updateFields({ description: e.target.value })}
              className="input input-bordered input-primary w-full"
            />
          </div>
        </div>
      </FormContainer>
      <ul className="steps steps-vertical mb-1 lg:steps-horizontal">
        <li className="step step-primary"></li>
        <li className="step"></li>
        <li className="step"></li>
      </ul>
    </div>
  )
}
