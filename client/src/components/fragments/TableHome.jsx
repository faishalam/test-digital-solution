import { useDispatch } from "react-redux"
import ButtonElement from "../elements/ButtonElement"
import { deleteCar, getById } from "../../features/asyncAction"
import ModalCarEdit from "./ModalCarEdit"

export default function TableHome(props) {
    const { data } = props
    const dispatch = useDispatch()

    const onHandleDelete = (id) => {
        dispatch(deleteCar(id))
    }

    const onHandleEdit = (id) => {
        dispatch(getById(id))
        document.getElementById('modalCarEdit').showModal()
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                                <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            No
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Merk
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Jenis
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Stock
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Harga
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Keterangan
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data?.map((item, i) => (
                                        <tr className="border-b border-neutral-200 dark:border-white/10" key={i}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium">{i + 1}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.merk}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.jenis}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.stock}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                            <td className="whitespace-nowrap px-6 py-4">{item.keterangan}</td>
                                            < td className="whitespace-nowrap px-6 py-4">
                                                <ButtonElement
                                                    classname="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline mr-2"
                                                    type="button"
                                                    handleClick={() => onHandleDelete(item.id)}
                                                >
                                                    Delete
                                                </ButtonElement>

                                                <ButtonElement
                                                    classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                    handleClick={() => onHandleEdit(item.id)}
                                                >
                                                    Edit
                                                </ButtonElement>
                                                <ModalCarEdit id={item.id} />
                                            </td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}