import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import Select from "@/Components/Select";
import { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Head } from '@inertiajs/react';
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import WarningButton from "@/Components/WaningButton.jsx";
import Swal from 'sweetalert2';

export default function Dashboard( props ) {
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(false);
    const [operation, setOperation] = useState(1);
    const MakeInput = useRef();
    const ModelInput = useRef();
    const ColorInput = useRef();
    const { data, setData, delete:destroy, post, put,
    processing, reset, errors} = useForm({
        id: '', make: '', model: '', color: ''
    });

    const openModal = (op, id, make, model, color) => {
        console.log('entre');
        setModal(true);
        setOperation(op);
        setData({make:'', model:'', color: ''});
        if(op === 1){
            setTitle('Anadir Auto');
        }else {
            setTitle('Modificar Auto');
            setData({id:id, make:make, model:model, color:color});
        }
    };

    const closeModal = () =>{
        setModal(false);
    };

    const save = (e) => {
        e.preventDefault();
        if(operation === 1) {
            post(route('cars.store'), {
                onSuccess: () => { ok('Auto Guardado') },
                onError: () => {
                    if(errors.make){
                        reset('make');
                        MakeInput.current.focus();
                    }
                    if(errors.model){
                        reset('model');
                        ModelInput.current.focus();
                    }
                    if(errors.color){
                        reset('color');
                        ColorInput.current.focus();
                    }

                }
            })
        } else {
            put(route('cars.update', data.id), {
                onSuccess: () => { ok('Auto Modificado') },
                onError: () => {
                    if(errors.make){
                        reset('make');
                        MakeInput.current.focus();
                    }
                    if(errors.model){
                        reset('model');
                        ModelInput.current.focus();
                    }
                    if(errors.color){
                        reset('color');
                        ColorInput.current.focus();
                    }

                }
            })
        }
    };

    const ok = (mensaje) => {
        reset();
        closeModal();
        Swal.fire({title:mensaje, icon:'success'})
    };

    const eliminar (id, name) => {
      const alerta = Swal.mixin({buttonsStyling:true});
      alerta.fire({
          title: 'Seguro de eliminar el auto' +name,
          text: 'Se perdera el Auto',
          icon: 'question', showCancelButton:true,
          confirmButtonText: '<i class="fa-solid fa-check"></i> Si, eliminar',
          cancelButtonText: '<i class="fa-solid fa-ban"></i> Cancelar',
      }).then((result) => {
         if(result.isConfirmed){
             destroy(route('cars.destroy', id),
                 {onSuccess: () => {ok('Auto Eliminado')}}
                 )
         }
      });
    };

    return (
        <AuthenticatedLayout
            user={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cars</h2>}
        >
            <Head title="Cars" />

            <div className="bg-white grid v-screen place-items-center">
                <div className="mt-3 mb-3 flex justify-end">
                    <PrimaryButton onClick={() => openModal(1)}>
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
                        {props.cars.map((car, i) => (
                            <tr key={car.id}>
                                <td className='border border-gray-400 px-2 py-2'>{(i+1)}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.make}</td>
                                <td className='border border-gray-400 px-2 py-2'>{car.model}</td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <i className={`fa-solid fa-car text-${car.color}-600`}></i>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <WarningButton onClick={() => openModal(2, car.id, car.make, car.model, car.color)} >
                                        <i className='fa-solid fa-edit'></i>
                                    </WarningButton>
                                </td>
                                <td className='border border-gray-400 px-2 py-2'>
                                    <DangerButton onClick={() => eliminar(car.id, car.make)}>
                                        <i className='fa-solid fa-remove'></i>
                                    </DangerButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Modal show={modal} onClose={closeModal}>
                <h2 className="p-3 text-lg font-medium text-gray-900">
                    {console.log(title)}
                    {title}
                </h2>
                <form onSubmit={save} className="p-6">
                    <div className='mt-1'>
                        <InputLabel for="make" value="Marca"></InputLabel>
                        <TextInput id="make" name="make" ref={MakeInput}
                        value={data.make} required='required'
                        handleChange={(e) => setData('make', e.target.value)}
                        className="mt-1 block w-3/4" isFocused></TextInput>
                        <InputError message={errors.make} className='m2-2'></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="model" value="Modelo"></InputLabel>
                        <TextInput id="model" name="model" ref={ModelInput}
                                   value={data.model} required='required'
                                   handleChange={(e) => setData('model', e.target.value)}
                                   className="mt-1 block w-3/4" ></TextInput>
                        <InputError message={errors.model} className='m2-2'></InputError>
                    </div>
                    <div className='mt-6'>
                        <InputLabel for="color" value="Color"></InputLabel>
                        <Select id="color" name="color" ref={ColorInput}
                                   value={data.color} required='required'
                                   handleChange={(e) => setData('color', e.target.value)}
                                   className="mt-1 block w-3/4"
                                   options={['gray', 'red', 'yellow', 'green', 'purple']}
                        ></Select>
                        <InputError message={errors.color} className='m2-2'></InputError>
                    </div>
                    <div className='mt-6'>
                        <PrimaryButton processing={processing} className='mt-2'>
                            <i className='fa-solid fa-save'></i>Guardar
                        </PrimaryButton>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
