import React from "react"
import { useForm, SubmitHandler} from "react-hook-form"

const max_steps = 3;


const IndexPage = () => {
const goToPreviousStep = () =>{
  setFormStep(cur => (cur-1))
}

  const [formStep, setFormStep] = React.useState(0)
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({ 
    mode: 'onChange',
  })
  
  const submitForm: SubmitHandler<FormValues> = data => {
    console.log(data);
    window.alert(JSON.stringify(data));
  }
  

  const completeFormStep = ()  => {
    setFormStep(cur => cur+1)
  }

        


  const renderButton = () => {
    if(formStep > 2) {
      return undefined;
    } else if (formStep == 2) {
      return (
        <button
        disabled={!isValid}
          
          type="submit"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          YARRRRR
        </button>
        )
    } else {
            return (
            <button
              disabled={!isValid}
              onClick={completeFormStep}
              type="button"
              className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
            )
    }
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-gray-800 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">
          Value <span className="text-yellow-500">Calculator</span>
        </h1>
        <p className="text-green-200 mt-2">
          subtext
        </p>
      </div>
      <div className="max-w-xl w-800 mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex items-center mb-2">
          <button onClick={goToPreviousStep} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
          </svg>
          </button>
            &nbsp;
            step: {formStep + 1} of {max_steps}
            </div>
            {/* SECTION 1 */}
            {formStep === 0 && (<section>
              <h2 className="font-semibold text-3xl mb-8">
                Let's start with setting some defaults
              </h2>
              <label htmlFor="username">How many total models do you anticipate putting into place in the next year?</label>
              <input
                type="text"
                id="username"
                name="username"
                className="text-input"
                {...register("username", {
                  required: 
                    {value: true,
                    message: "Please Type a username"}
                  }
                  )
                }
              />
              {errors.username && (
                <p>
                  {errors.username.message}
                  {console.log("ERROR HERE: ", errors)}
                </p>
                )}

<br /><br />
              <label htmlFor="username">How many total models do you anticipate putting into place in the next year?</label>
              <input
                type="text"
                id="username"
                name="username"
                className="text-input"
                {...register("username", {
                  required: 
                    {value: true,
                    message: "Please Type a username"}
                  }
                  )
                }
              />
              {errors.username && (
                <p>
                  {errors.username.message}
                  {console.log("ERROR HERE: ", errors)}
                </p>
                )}

<br /><br />
              <label htmlFor="username">How many total models do you anticipate putting into place in the next year?</label>
              <input
                type="text"
                id="username"
                name="username"
                className="text-input"
                {...register("username", {
                  required: 
                    {value: true,
                    message: "Please Type a username"}
                  }
                  )
                }
              />
              {errors.username && (
                <p>
                  {errors.username.message}
                  {console.log("ERROR HERE: ", errors)}
                </p>
                )}



<br /><br />
              <label htmlFor="username">How many total models do you anticipate putting into place in the next year?</label>
              <input
                type="text"
                id="username"
                name="username"
                className="text-input"
                {...register("username", {
                  required: 
                    {value: true,
                    message: "Please Type a username"}
                  }
                  )
                }
              />
              {errors.username && (
                <p>
                  {errors.username.message}
                  {console.log("ERROR HERE: ", errors)}
                </p>
                )}
            </section>)}


            {/* SECTION 2 */}
            {formStep === 1 && (<section>
              <h2 className="font-semibold text-3xl mb-8">Billing Information</h2>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="text-input"
                {...register("address", {
                  required: 
                    {value: true,
                    message: "Please Type an address"}
                  }
                  )
                }
              />
            </section>)}


            {/* SECTION 3 */}
            {formStep === 2 && (<section>
              <h2 className="font-semibold text-3xl mb-8">Legal Information</h2>
            <div className="block mt-6">
              <input
                name="toc"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
                {...register("TOC", {
                  required: 
                    {value: true,
                    message: "you must accept the Ts&Cs"}
                  }
                  )
                }
              />
              <span>
                I accept the&nbsp;
                <a className="text-blue-400 underline" href="/">
                  Terms and Conditions
                </a>
                .
              </span>
            </div>
            <div className="block mt-6">
              <input
                name="pp"
                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                type="checkbox"
                {...register("PRIVACY", {
                  required: 
                    {value: true,
                    message: "you must accept the Privacy Policy"}
                  }
                  )
                }
              />
              <span>
                I accept the&nbsp;
                <a className="text-blue-400 underline" href="/">
                  Privacy Policy
                </a>
                .
              </span>
              </div>
            </section>)}

            {/* SECTION 4 */}
            {formStep === 3 && (<section>
              <h1 className="font-semibold text-3xl mb-8">Congratulations !!</h1>
              </section>)}
              {/* SUBMIT BUTTON FOR THE FORM */}
              {renderButton()}
              <pre>
                {JSON.stringify(watch(), null, 2)}
              </pre>
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
