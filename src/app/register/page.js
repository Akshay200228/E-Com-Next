"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import SelectComponent from "@/components/FormElements/SelectComponent";
import { registrationFormControls } from "@/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

const isRegistered = false;

const initalFormData = {
    name: '',
    email: '',
    password: '',
    role: 'customer'
}

export default function Register() {

    const [formData, setFormData] = useState(initalFormData);

    console.log(formData)

    function isFormValid() {
        return formData && formData.name && formData.name.trim() !== ''
            && formData.email && formData.email.trim() !== ''
            && formData.password && formData.password.trim() !== '' ? true : false
    }

    const router = useRouter();

    return (
        <div className="relative bg-white">
            <div className="flex flex-col items-center justify-between pt-0 pb-0 pl-10 pr-10 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center justify-center w-full pl-10 pr-10 lg:flex-row">
                    <div className="relative w-full max-w-2xl mt-10 mb-0 ml-0 mr-0 lg:mt-0 lg:w-5/12">
                        <div className="relative z-10 flex flex-col items-center justify-start pt-10 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
                            <p className="w-full font-serif text-4xl font-medium text-center">
                                {
                                    isRegistered ? "Registration Successfully" :
                                        "Sign Up for an account"
                                }
                            </p>
                            {
                                isRegistered ? (
                                    <button
                                        className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium tracking-wide text-white uppercase transition-all duration-200 ease-in-out bg-black focus:shadow"
                                        onClick={() => router.push('/login')}
                                    >
                                        Login
                                    </button>
                                ) : (
                                    <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
                                        {
                                            registrationFormControls.map((controlItem) => (
                                                controlItem.componentType === 'input' ? (
                                                    <InputComponent
                                                        type={controlItem.type}
                                                        placeholder={controlItem.placeholder}
                                                        label={controlItem.label}
                                                        onChange={(event) => {
                                                            setFormData({
                                                                ...formData,
                                                                [controlItem.id]: event.target.value
                                                            })
                                                        }}
                                                        value={formData[controlItem.id]}
                                                    />
                                                ) : controlItem.componentType === 'select' ? (
                                                    <SelectComponent
                                                        options={controlItem.options}
                                                        label={controlItem.label}
                                                        onChange={(event) => {
                                                            setFormData({
                                                                ...formData,
                                                                [controlItem.id]: event.target.value
                                                            })
                                                        }}
                                                        value={formData[controlItem.id]}
                                                    />
                                                ) : null
                                            ))
                                        }
                                        <button
                                            className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium tracking-wide text-white uppercase transition-all duration-200 ease-in-out bg-black disabled:opacity-50 focus:shadow"
                                            disabled={!isFormValid()}
                                        >
                                            Register
                                        </button>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
