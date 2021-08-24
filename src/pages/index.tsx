import React from "react"
import { useForm, SubmitHandler} from "react-hook-form"

const max_steps = 6;


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
    if(formStep > 5) {
      return undefined;
    } else if (formStep == 5) {
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
              className="mt-6 bg-gradient-to-r from-pink-500 to-yellow-500 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next Step
            </button>
            )
    }
  }
  return (
    <div className="min-h-screen bg-fixed flex flex-col items-start antialiased relative">
      <div
        style={{
          //clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          backgroundImage: 'url("3d-pipes-abstract-4k_1553075310.jpg")',
          height: "34rem",
        }}
        className="absolute bg-gray-800 inset-x-0 top-0"
      ></div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form onSubmit={handleSubmit(submitForm)}>
          <div className="flex items-center mb-2">
          {formStep > 0 && (
            <button onClick={goToPreviousStep} type="button">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          </button>)}
            &nbsp;
            step: {formStep + 1} of {max_steps} 
            </div>
            {/* SECTION 1 */}
            {formStep === 0 && (
            <section>
              <h2 className="font-semibold text-3xl mb-8">
                How many experience types do you anticipatie putting to work in the coming year?
              </h2>
              <label htmlFor="media_type">
                Dimensional media can be used to create many types of experiences. Which ones of these do you anticipate putting into place in the coming year?
              </label>
              <br />
              <br />
              <div className="w-auto">
                <div className="inline-block">
                  <input type="checkbox" name="experiences[]" id="employee_learning" value="employee_learning" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}/>
                    &nbsp;<label for="employee_learning">Employee Learning</label><br />

                  <input type="checkbox" name="experiences[]" id="sales_enablement" value="sales_enablement" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="sales_enablement">Sales Enablement</label><br />

                  <input type="checkbox" name="experiences[]" id="video_production" value="video_production" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="video_production">Video Production</label><br />

                  <input type="checkbox" name="experiences[]" id="maintenance_and_repair" value="maintenance_and_repair" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="maintenance_and_repair">Maintenance & Repair</label><br />

                  <input type="checkbox" name="experiences[]" id="spatial_ecommerce" value="spatial_ecommerce" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="spatial_ecommerce">Spatial Ecommerce</label><br />

                  <input type="checkbox" name="experiences[]" id="photo_production" value="photo_production" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="photo_production">Photo Production</label><br />

                  <input type="checkbox" name="experiences[]" id="spatial_advertising" value="spatial_advertising" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="spatial_advertising">Spatial Advertising</label><br />

                  <input type="checkbox" name="experiences[]" id="customer_education" value="customer_education" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="customer_education">Customer Education</label><br />

                  <input type="checkbox" name="experiences[]" id="connected_worker" value="connected_worker" 
                  {...register("experiences", {
                    required: 
                      {value: false,
                      message: "Please Select an Estimate"}
                    })}
                  />
                    &nbsp;<label for="connected_worker">Connected Worker</label><br />                  
                </div>
              </div>
            </section>
          )}

            {/* SECTION 2 */}
            {formStep === 1 && (<section>
              <h2 className="font-semibold text-3xl mb-8">How many products do you anticipate building these expereinces for?</h2>
              <label htmlFor="address">Are you going to build these experiences for 1, 100, 1000 products this year?</label>
              <br />
              <br />
              <select id="product_numbers" name="product_numbers"
                   {...register("product_numbers", {
                    required: 
                      {value: true,
                      message: "Please Select an Estimate"}
                    })}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="100">100</option>
                    <option value="500">500</option>
                    <option value="1,000">1,000</option>
                    <option value="5,000">5,000</option>
                    <option value="10,000">10,000</option>
                    <option value="15,000">15,000</option>
                    <option value="100,000">100,000</option>
                    <option value="500,000">500,000</option>
                    <option value="1,000,000">1,000,000</option>
                    
                  </select>
            </section>)}



            {/* SECTION 2 */}
            {formStep === 2 && (<section>
              <h2 className="font-semibold text-3xl mb-8">How complex are the products that you produce?</h2>
              <label htmlFor="address">From soda cans to satellites, help us understand the complexity of the products you create.</label>
              <br />
              <br />
              <input id="complexity_x_small" type="range" min="0" max="100" defaultValue="3" step="10"
              {...register("complexity_x_small", {
                required: 
                  {value: true,
                  message: "Please Select an Estimate"}
                })}/>
              &nbsp;<label for="complexity_x_small">XSmall</label><br />

              <input id="complexity_small" type="range" min="0" max="100" defaultValue="3" step="10"
              {...register("complexity_small", {
                required: 
                  {value: true,
                  message: "Please Select an Estimate"}
                })}/>
              &nbsp;<label for="complexity_small">Small</label><br />

              <input id="complexity_medium" type="range" min="0" max="100" defaultValue="3" step="10"
              {...register("complexity_medium", {
                required: 
                  {value: true,
                  message: "Please Select an Estimate"}
                })}/>
              &nbsp;<label for="complexity_medium">Medium</label><br />

              <input id="complexity_large" type="range" min="0" max="100" defaultValue="3" step="10"
              {...register("complexity_large", {
                required: 
                  {value: true,
                  message: "Please Select an Estimate"}
                })}/>
              &nbsp;<label for="complexity_large">Large</label><br />

              <input id="complexity_X_large" type="range" min="0" max="100" defaultValue="3" step="10"
              {...register("complexity_X_large", {
                required: 
                  {value: true,
                  message: "Please Select an Estimate"}
                })}/>
              &nbsp;<label for="complexity_X_large">X Large</label><br />
            </section>)}
            

            {/* SECTION 2 */}
            {formStep === 3 && (<section>
            <h2 className="font-semibold text-3xl mb-8">How many markets are you actively involved in?</h2>
            <label htmlFor="address">Asia Pacific, Europe, Middle-East and Africa, North, Central and South America.</label>
            <br />
            <br />
            <select id="market_units" name="market_units"
                   {...register("market_units", {
                    required: 
                      {value: true,
                      message: "Please Select a Number of Market Units"}
                    })}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                  </select>

            </section>)}


            {/* SECTION 2 */}
            {formStep === 4 && (<section>
            <h2 className="font-semibold text-3xl mb-8">How many business units are in your organizations?</h2>
            <label htmlFor="address">Marketing, Sales, Technology, R&D, Human Resources, Corporate Learning?</label>
            <br />
            <br />
            <select id="business_units" name="business_units"
                   {...register("business_units", {
                    required: 
                      {value: true,
                      message: "Please Select a Number of Business Units"}
                    })}>
                    <option value="1">1</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="100">100</option>
                    <option value="500">500</option>                
                  </select>

            </section>)}

            {/* SECTION 3 */}
            {formStep === 5 && (<section>
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
            {formStep === 6 && (<section>
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
