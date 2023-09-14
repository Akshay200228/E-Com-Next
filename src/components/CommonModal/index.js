"use client"

import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"

export default function CommonModal({
    modalTitle,
    mainContent,
    showButtons,
    buttonComponent,
    show,
    setShow,
    showModalTitle
}) {
    return (
        <Transition.Root
            show={show}
            as={Fragment}
        >
            <Dialog
                as="div"
                onClose={setShow}
                className={`relative z-10`}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-900"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-900"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-500"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Panel className={"w-screen max-w-md"}>
                                    <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                                            {
                                                showModalTitle ? <div className="flex items-start justify-between">
                                                    <Dialog.Title>{modalTitle}</Dialog.Title>
                                                </div> : null
                                            }
                                            <div className="mt-20">
                                                {mainContent}
                                            </div>
                                        </div>
                                        {showButtons ? (
                                            <div className="px-4 py-6 border-none sm:px-6">
                                                {buttonComponent}
                                            </div>
                                        ) : null}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
