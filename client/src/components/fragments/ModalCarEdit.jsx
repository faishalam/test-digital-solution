import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ModalInput from "../elements/ModalInput";
import ButtonElement from "../elements/ButtonElement";
import { addCar, updateCar } from "../../features/asyncAction";

export default function ModalCarEdit(props) {
    const {id} = props
    const [form, setForm] = useState({
        merk: '',
        jenis: '',
        stock: '',
        harga: '',
        keterangan: ''
    })
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const carById = useSelector((state) => state.car.carById)


    useEffect(() => {
        setForm({
            merk: carById.merk,
            jenis: carById.jenis,
            stock: carById.stock,
            harga: carById.harga,
            keterangan: carById.keterangan
        })
    }, [carById])


    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(updateCar(id, form))
            setForm({
                merk: '',
                jenis: '',
                stock: '',
                harga: '',
                keterangan: ''
            })
            setError('')
            document.getElementById('modalCarEdit').close()
        } catch (error) {
            setError(error)
        }
    }


    return (
        <dialog id="modalCarEdit" className="modal w-2/5 h-3/6 overflow-y-auto rounded-lg">
            <div className="modal-box">
                <form onSubmit={handleSubmit} className="bg-white p-6 mb-4">
                    <h1 className="text-gray-800 font-bold text-xl mb-8 border-b-2 border-black">Update Car</h1>
                    {error && <p className="text-red-500 text-xs">*{error}</p>}
                    <ModalInput
                        label="Merk Mobil"
                        type="text"
                        name="merk"
                        id="merk"
                        onChange={handleChange}
                        value={form.merk}
                    />

                    <ModalInput
                        label="Jenis Mobil"
                        type="text"
                        name="jenis"
                        id="jenis"
                        onChange={handleChange}
                        value={form.jenis}
                    />

                    <ModalInput
                        label="Stock Mobil"
                        type="number"
                        name="stock"
                        id="stock"
                        onChange={handleChange}
                        value={form.stock}
                    />

                    <ModalInput
                        label="Harga Mobil"
                        type="number"
                        name="harga"
                        id="harga"
                        onChange={handleChange}
                        value={form.harga}
                    />

                    <ModalInput
                        label="Keterangan"
                        type="text"
                        name="keterangan"
                        id="keterangan"
                        onChange={handleChange}
                        value={form.keterangan}
                    />


                    <div className="flex justify-center">
                        <ButtonElement
                            type={'submit'}
                            classname={'w-2/4 h-10 bg-green-800 text-white rounded-lg'}
                        >
                            Update Car
                        </ButtonElement>

                    </div>
                </form>
            </div>
        </dialog>
    )
}