import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'

const StatusButton = ({ status, id }) => {
    const [newStatus, setNewStatus] = useState(status)


    let option;
    let buttonClass;
    // set className by status 
    if (newStatus === "shipped") {
        buttonClass = " bg-green-200 text-green-800"
        option = "pending"
    } else {
        buttonClass = " bg-orange-200 text-orange-800"
        option = "shipped"
    }

    let iconClass;
    if (newStatus === "shipped") {
        iconClass = "text-green-700 hover:text-green-400"
    } else {
        iconClass = "text-orange-700 hover:text-orange-400"
    }

    // action for click status update button
    const handleOptionClick = () => {
        setNewStatus(option);
        const data = { id, status: option }

        fetch("https://damp-plateau-38093.herokuapp.com/changeorderstatus", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("status updated successfully!!");
                }
            });
    }

    return (
        <Menu as="div" className="inline-block text-left">
            <div>
                <Menu.Button className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ${buttonClass}`}>
                    {newStatus}
                    <ChevronDownIcon
                        className={`w-5 h-5 ml-2 -mr-1 ${iconClass} `}
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="lg:absolute w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <Menu.Item>
                            {({ active }) => (
                                <button onClick={handleOptionClick}
                                    className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                        } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                                >
                                    {active ? (
                                        <EditActiveIcon
                                            className="w-5 h-5 mr-2"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <EditInactiveIcon
                                            className="w-5 h-5 mr-2"
                                            aria-hidden="true"
                                        />
                                    )}
                                    {option}
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

export default StatusButton;