import React, { useRef, useState } from "react";
import "./style.scss";
import { PageHeaderContent } from "../../components/pageHeaderComponent";
import { RiContactsFill } from "react-icons/ri";
import { Animate } from "react-simple-animate";
import emailjs from "@emailjs/browser";
import { MdError } from "react-icons/md";
import { SiTicktick } from "react-icons/si";

export const Contact = () => {
    const form = useRef();
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);
    const [successMessageVisible, setSuccessMessageVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        emailjs
            .sendForm("service_h00441q", "template_abc5ktd", form.current, {
                publicKey: "ErBYe3to_e5uy9o5x",
            })
            .then(
                () => {
                    e.target.reset();
                    setSuccessMessageVisible(true);
                    setTimeout(() => {
                        setSuccessMessageVisible(false);
                    }, 3000);
                    setErrorMessageVisible(false);
                    setIsLoading(false);
                },
                (error) => {
                    e.target.reset();
                    setErrorMessageVisible(true);
                    setTimeout(() => {
                        setErrorMessageVisible(false);
                    }, 3000);
                    setSuccessMessageVisible(false);
                    setIsLoading(false);
                }
            );
    };
    return (
        <section id='contact' className='contact'>
            <PageHeaderContent
                headerText='Contact Me'
                icon={<RiContactsFill size={40} />}
            />
            <div className='contact__content'>
                <div className='message'>
                    <div
                        className={`message__error ${
                            errorMessageVisible ? "show" : ""
                        }`}
                    >
                        <MdError size={25} />
                        <p>Error in sending Message!</p>
                    </div>
                    <div
                        className={`message__success ${
                            successMessageVisible ? "show" : ""
                        }`}
                    >
                        <SiTicktick size={25} />
                        <p>Message sent succesfully.</p>
                    </div>
                </div>
                <Animate
                    play
                    delay={0}
                    duration={1}
                    start={{
                        transform: "translateX(200px)",
                    }}
                    end={{
                        transform: "translateX(0)",
                    }}
                >
                    <h3 className='contact__content__header-text'>
                        Let's talk
                    </h3>
                </Animate>
                <Animate
                    play
                    delay={0}
                    duration={1.5}
                    start={{
                        transform: "translateX(-200px)",
                    }}
                    end={{
                        transform: "translateX(0)",
                    }}
                >
                    <form
                        ref={form}
                        className='contact__content__form'
                        onSubmit={sendEmail}
                    >
                        <div className='contact__content__form__controlsWrapper'>
                            <div>
                                <input
                                    type='text'
                                    required
                                    name='user_name'
                                    className='inputName'
                                />
                                <label htmlFor='name' className='nameLabel'>
                                    Name
                                </label>
                            </div>
                            <div>
                                <input
                                    type='email'
                                    required
                                    name='user_email'
                                    className='inputEmail'
                                />
                                <label htmlFor='email' className='emailLabel'>
                                    Email
                                </label>
                            </div>
                            <div>
                                <textarea
                                    type='text'
                                    required
                                    name='message'
                                    className='inputDescription'
                                    rows='5'
                                />
                                <label
                                    htmlFor='description'
                                    className='descriptionLabel'
                                >
                                    Description
                                </label>
                            </div>
                        </div>
                        {isLoading ? (
                            <button className='loader' type='reset'>
                                Loading...
                            </button>
                        ) : (
                            <button type='submit'>Submit</button>
                        )}
                    </form>
                </Animate>
            </div>
        </section>
    );
};
