import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./KcalCalc.scss";

const validationSchema = Yup.object({
   weight: Yup.number()
      .required("Required")
      .positive("Must be a positive number"),
   height: Yup.number()
      .required("Required")
      .positive("Must be a positive number"),
   age: Yup.number()
      .required("Required")
      .positive("Must be a positive number")
      .integer("Must be an integer"),
});

const KcalCalc = () => {
   const [gender, setGender] = useState("male");
   const [activity, setActivity] = useState("1.2");
   const [goal, setGoal] = useState("maintain");
   const [calories, setCalories] = useState(null);

   const formik = useFormik({
      initialValues: {
         weight: "",
         height: "",
         age: "",
      },
      validationSchema: validationSchema,
      onSubmit: values => {
         const { weight, height, age } = values;
         const weightNum = parseFloat(weight);
         const heightNum = parseFloat(height);
         const ageNum = parseInt(age, 10);
         const activityNum = parseFloat(activity);

         let bmr;
         if (gender === "male") {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum + 5;
         } else {
            bmr = 10 * weightNum + 6.25 * heightNum - 5 * ageNum - 161;
         }

         let totalCalories = bmr * activityNum;

         if (goal === "lose") {
            totalCalories -= 500;
         } else if (goal === "gain") {
            totalCalories += 500;
         }

         setCalories(totalCalories.toFixed(2));
      },
   });

   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <section className="kcalCalc">
               <div className="container">
                  <div className="kcalCalc__content">
                     <form
                        onSubmit={formik.handleSubmit}
                        className="kcalCalc__calc text"
                     >
                        <div className="kcalCalc__top">
                           <div className="kcalCalc__item">
                              <label>Weight (kg):</label>
                              <input
                                 name="weight"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.weight}
                              />
                              {formik.touched.weight && formik.errors.weight ? (
                                 <div>{formik.errors.weight}</div>
                              ) : null}
                           </div>
                           <div className="kcalCalc__item">
                              <label>Height (cm):</label>
                              <input
                                 name="height"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.height}
                              />
                              {formik.touched.height && formik.errors.height ? (
                                 <div>{formik.errors.height}</div>
                              ) : null}
                           </div>
                           <div className="kcalCalc__item">
                              <label>Age:</label>
                              <input
                                 name="age"
                                 onChange={formik.handleChange}
                                 onBlur={formik.handleBlur}
                                 value={formik.values.age}
                              />
                              {formik.touched.age && formik.errors.age ? (
                                 <div>{formik.errors.age}</div>
                              ) : null}
                           </div>
                        </div>
                        <div className="kcalCalc__gender">
                           <div className="kcalCalc__item">
                              <label>Gender:</label>
                              <div className="kcalCalc__buttons">
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${gender === "male" ? "btn-active" : ""}`}
                                    onClick={() => setGender("male")}
                                 >
                                    Male
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${gender === "female" ? "btn-active" : ""}`}
                                    onClick={() => setGender("female")}
                                 >
                                    Female
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="kcalCalc__activity">
                           <div className="kcalCalc__item">
                              <label>Activity Level:</label>
                              <div className="kcalCalc__buttons">
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${activity === "1.2" ? "btn-active" : ""}`}
                                    onClick={() => setActivity("1.2")}
                                 >
                                    Sedentary
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${activity === "1.375" ? "btn-active" : ""}`}
                                    onClick={() => setActivity("1.375")}
                                 >
                                    Lightly active
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${activity === "1.55" ? "btn-active" : ""}`}
                                    onClick={() => setActivity("1.55")}
                                 >
                                    Moderately active
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${activity === "1.725" ? "btn-active" : ""}`}
                                    onClick={() => setActivity("1.725")}
                                 >
                                    Very active
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${activity === "1.9" ? "btn-active" : ""}`}
                                    onClick={() => setActivity("1.9")}
                                 >
                                    Super active
                                 </button>
                              </div>
                           </div>
                        </div>
                        <div className="kcalCalc__goal">
                           <div className="kcalCalc__item">
                              <label>Goal:</label>
                              <div className="kcalCalc__buttons">
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${goal === "lose" ? "btn-active" : ""}`}
                                    onClick={() => setGoal("lose")}
                                 >
                                    Lose Weight
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${goal === "maintain" ? "btn-active" : ""}`}
                                    onClick={() => setGoal("maintain")}
                                 >
                                    Maintain Weight
                                 </button>
                                 <button
                                    type="button"
                                    className={`kcalCalc__button ${goal === "gain" ? "btn-active" : ""}`}
                                    onClick={() => setGoal("gain")}
                                 >
                                    Gain Weight
                                 </button>
                              </div>
                           </div>
                        </div>
                        <button type="submit">Calculate</button>
                        {calories && (
                           <div className="kcalCalc__result">
                              Calories: {calories}
                           </div>
                        )}
                     </form>
                     <div className="kcalCalc__info">
                        <h2 className="kcalCalc__title title">
                           Calorie Calculator
                        </h2>
                        <p className="kcalCalc__desc text">
                           Our calorie calculator helps you determine the daily
                           calorie intake required to achieve your goals: lose
                           weight, maintain weight, or gain weight. Simply input
                           your parameters (weight, height, age, gender), choose
                           your activity level and desired goal. The calculator
                           will automatically calculate the optimal calorie
                           intake needed to maintain your health and reach your
                           desired results.
                        </p>
                        <h3 className="kcalCalc__use title">How to use:</h3>
                        <ul className="kcalCalc__list text">
                           <li className="kcalCalc__item">
                              Enter your weight, height, and age.
                           </li>
                           <li className="kcalCalc__item">
                              Select your gender.
                           </li>
                           <li className="kcalCalc__item">
                              Indicate your activity level.
                           </li>
                           <li className="kcalCalc__item">Choose your goal.</li>
                           <li className="kcalCalc__item">
                              Click the "Calculate" button to find out your
                              daily calorie intake.
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </div>
   );
};

export default KcalCalc;
