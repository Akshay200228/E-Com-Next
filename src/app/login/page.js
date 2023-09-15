"use client";

import InputComponent from "@/components/FormElements/InputComponent";
import { loginFormControls } from "@/utils";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();

    return (
        <div className="relative bg-white">
            <div className="flex flex-col items-center justify-between pt-0 pb-0 pl-10 pr-10 mt-8 mr-auto xl:px-5 lg:flex-row">
                <div className="flex flex-col items-center justify-center w-full pl-10 pr-10 lg:flex-row">
                    <div className="relative w-full max-w-2xl mt-10 mb-0 ml-0 mr-0 lg:mt-0 lg:w-5/12">
                        <div className="relative z-10 flex flex-col items-center justify-start pt-10 pb-10 pl-10 pr-10 bg-white shadow-2xl rounded-xl">
                            <p className="w-full font-serif text-4xl font-medium text-center">
                                Login
                            </p>
                            <div className="relative w-full mt-6 mb-0 ml-0 mr-0 space-y-8">
                                {
                                    loginFormControls.map((controlItem) => (
                                        controlItem.componentType === 'input' ? (
                                            <InputComponent
                                                type={controlItem.type}
                                                placeholder={controlItem.placeholder}
                                                label={controlItem.label}
                                            />
                                        ) : null
                                    ))
                                }
                                <button
                                    className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium tracking-wide text-white uppercase transition-all duration-200 ease-in-out bg-black focus:shadow"
                                >
                                    Login
                                </button>
                                <div className="flex flex-col gap-2">
                                    <p>New to website ?</p>
                                    <button
                                        className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium tracking-wide text-white uppercase transition-all duration-200 ease-in-out bg-black focus:shadow"
                                        onClick={() => router.push("/register")}

                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
