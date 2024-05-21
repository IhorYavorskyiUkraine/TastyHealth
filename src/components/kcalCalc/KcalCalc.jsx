import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { motion } from "framer-motion";
import * as Yup from "yup";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import "./KcalCalc.scss";

const validationSchema = Yup.object({
   weight: Yup.number()
      .required("Required")
      .min(10, "Too low")
      .max(500, "Too high")
      .positive("Must be a positive number")
      .typeError("Must be a number"),
   height: Yup.number()
      .min(50, "Too low")
      .max(300, "Too high")
      .required("Required")
      .typeError("Must be a number")
      .positive("Must be a positive number"),
   age: Yup.number()
      .min(4, "Too low")
      .max(100, "Too high")
      .required("Required")
      .typeError("Must be a number")
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
            totalCalories -= 300;
         } else if (goal === "gain") {
            totalCalories += 300;
         }

         setCalories(totalCalories.toFixed(0));
      },
   });

   return (
      <div className="wrapper">
         <Header />
         <main className="main">
            <section className="kcalCalc">
               <div className="container">
                  <div className="kcalCalc__content">
                     <motion.form
                        initial={{ y: 150 }}
                        whileInView={{ y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        onSubmit={formik.handleSubmit}
                        className="kcalCalc__form text"
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
                                 <div className="error">
                                    {formik.errors.weight}
                                 </div>
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
                                 <div className="error">
                                    {formik.errors.height}
                                 </div>
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
                                 <div className="error">
                                    {formik.errors.age}
                                 </div>
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
                        <div className="kcalCalc__submit">
                           <button type="submit">Calculate</button>
                        </div>
                        <div className="kcalCalc__myDiet">
                           {calories && (
                              <div className="kcalCalc__result">
                                 Calories: {calories}
                                 {(() => {
                                    if (gender === "male") {
                                       switch (goal) {
                                          case "gain":
                                             return (
                                                <Link
                                                   to="/diets/2"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                          case "lose":
                                             return (
                                                <Link
                                                   to="/diets/1"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                          default:
                                             return (
                                                <Link
                                                   to="/diets/4"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                       }
                                    } else {
                                       switch (goal) {
                                          case "gain":
                                             return (
                                                <Link
                                                   to="/diets/5"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                          case "lose":
                                             return (
                                                <Link
                                                   to="/diets/3"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                          default:
                                             return (
                                                <Link
                                                   to="/diets/6"
                                                   className="kcalCalc__diet"
                                                >
                                                   My Diet
                                                </Link>
                                             );
                                       }
                                    }
                                 })()}
                              </div>
                           )}
                        </div>
                     </motion.form>
                     <div className="kcalCalc__info info">
                        <motion.div
                           className="info__calculator"
                           initial={{ y: 150 }}
                           whileInView={{ y: 0 }}
                           transition={{ duration: 0.3 }}
                           viewport={{ once: true }}
                        >
                           <h2 className="info__title title">
                              Calorie Calculator
                           </h2>
                           <p className="info__desc text">
                              Our calorie calculator helps you determine the
                              daily calorie intake required to achieve your
                              goals: lose weight, maintain weight, or gain
                              weight. Simply input your parameters (weight,
                              height, age, gender), choose your activity level
                              and desired goal. The calculator will
                              automatically calculate the optimal calorie intake
                              needed to maintain your health and reach your
                              desired results.
                           </p>
                        </motion.div>
                        <motion.div
                           className="info__use"
                           initial={{ y: 150 }}
                           whileInView={{ y: 0 }}
                           transition={{ duration: 0.3 }}
                           viewport={{ once: true }}
                        >
                           <h2 className="info__title title">How to use:</h2>
                           <ul className="info__list text">
                              <li className="info__item">
                                 Enter your weight, height, and age.
                              </li>
                              <li className="info__item">
                                 Select your gender.
                              </li>
                              <li className="info__item">
                                 Indicate your activity level.
                              </li>
                              <li className="info__item">Choose your goal.</li>
                              <li className="info__item">
                                 Click the "Calculate" button to find out your
                                 daily calorie intake.
                              </li>
                           </ul>
                        </motion.div>
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
