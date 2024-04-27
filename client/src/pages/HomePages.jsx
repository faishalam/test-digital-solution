import { useEffect } from "react";
import TableHome from "../components/fragments/TableHome";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../features/asyncAction";
import Sidebar from "../components/fragments/Sidebar";
import Search from "../components/elements/Search";

export default function HomePages() {
    const dispatch = useDispatch()
    const car = useSelector((state) => state.car.car)

    useEffect(() => {
        const getData = async () => {
            try {
                await dispatch(getAll())
            } catch (error) {
                console.log(error)
            }
        }

        getData()
    }, [dispatch])

    return (
        <>
            <div className="w-full h-screen flex">
                <div className="w-1/5 h-screen">
                    <Sidebar />
                </div>

                <div className="w-full h-screen bg-white p-10">
                    <Search/>
                    <TableHome data={car} />
                </div>
            </div>
        </>
    )
}