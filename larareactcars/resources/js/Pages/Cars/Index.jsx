import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';

import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import WarningButton from "@/Components/WaningButton.jsx";

export default function Dashboard( props ) {
    return (
        <AuthenticatedLayout
            user={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cars</h2>}
        >
            <Head title="Cars" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton>
                        <i className='fa-solid fa-plus-circle'></i>
                        Anadir
                    </PrimaryButton>
                </div>
            </div>

            <div className='bg-white grid v-screen place-items-center py-6'>
                <table className='table-auto border border-gray-400'>
                    <thead>
                        <tr className='bg-gray-100 text-green-600'>
                            <th className='px-2 py-2'>#</th>
                            <th className='px-2 py-2'>MARCA</th>
                            <th className='px-2 py-2'>MODELO</th>
                            <th className='px-2 py-2'>COLOR</th>
                            <th className='px-2 py-2'></th>
                            <th className='px-2 py-2'></th>
                        </tr>
                    </thead>
                    <tbody>
                    {console.log(props.cars)}
                        {props.cars.map((car, i) => (
                            <tr key={car.id}>
                                <td className='border border-gray-400 px-2 py-2'>{(i+1)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.make}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.model}</td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <i className={`fa-solid fa-car text-${car.color}-600`}></i>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <WarningButton>
                                        <i className='fa-solid fa-edit'></i>
                                    </WarningButton>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <DangerButton>
                                        <i className='fa-solid fa-remove'></i>
                                    </DangerButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Are you sure you want to delete your account?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p>

                    <div className="mt-6">
                        <InputLabel htmlFor="password" value="Password" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Password"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <DangerButton className="ml-3" disabled={processing}>
                            Delete Account
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
