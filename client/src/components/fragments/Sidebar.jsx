import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalCar from "./ModalCar";
import ButtonElement from "../elements/ButtonElement";

export default function Sidebar() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onHandleOpenModal = () => {
        document.getElementById('modalCar').showModal()
    }

    return (
        <div
            id="Main"
            className="bg-[#2f7927] w-full h-full flex justify-start items-start flex-col"
        >
            <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
                <p className="text-2xl leading-6 text-white">CARS</p>
            </div>
            <div className="flex flex-col justify-start items-start px-6 border-gray-600 w-full  ">
                <Link to={'/'}
                    className="focus:outline-none focus:text-indigo-400 text-left  text-white flex justify-between items-center w-full py-5 space-x-14  "
                >
                    <p className="text-sm leading-5  uppercase">Cars</p>
                </Link>
                <div
                    id="menu1"
                    className="flex justify-start  flex-col w-full md:w-auto items-start pb-1 "
                >
                    <ButtonElement 
                        handleClick={() => onHandleOpenModal()}
                        classname="flex justify-start items-center space-x-6 focus:bg-gray-700 text-white hover:bg-green-500 rounded px-3 py-2  w-full md:w-52">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 6H7C6.46957 6 5.96086 6.21071 5.58579 6.58579C5.21071 6.96086 5 7.46957 5 8V17C5 17.5304 5.21071 18.0391 5.58579 18.4142C5.96086 18.7893 6.46957 19 7 19H16C16.5304 19 17.0391 18.7893 17.4142 18.4142C17.7893 18.0391 18 17.5304 18 17V14"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M17 10C18.6569 10 20 8.65685 20 7C20 5.34314 18.6569 4 17 4C15.3431 4 14 5.34314 14 7C14 8.65685 15.3431 10 17 10Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <p className="text-base leading-4  ">Add Car</p>
                    </ButtonElement>

                   

                   
                </div>
            </div>
            <ModalCar />
        </div>
    )
}