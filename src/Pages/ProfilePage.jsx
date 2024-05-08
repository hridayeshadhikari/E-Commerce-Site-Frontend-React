
import { Card, CardContent} from '@mui/material';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const {auth} =useSelector(store=>store)


    return (
        <section className="bg-whitesmoke mt-20 flex justify-center mb-20">
            <Card sx={{width:"30rem"}}> 
                <div>
                    <CardContent className="flex flex-col items-center text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            className="rounded-full img-fluid"
                            style={{ width: 150 }}
                        />
                        <h5 className="my-3">{auth?.user?.firstName} {auth?.user?.lastName}</h5>

                    </CardContent>
                    <div className=" text-start ">
                    <CardContent>
                                <hr />
                                <div className="flex mb-4">
                                    <div className="w-1/3 ml-[6rem]">
                                        <h5 className="mb-0">First Name</h5>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-gray-500 mb-0">:</p>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-gray-500 mb-0">{auth?.user?.firstName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex mb-4">
                                    <div className="w-1/3 ml-[6rem]">
                                        <h5 className="mb-0 ">Last Name</h5>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-gray-500 mb-0">:</p>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-gray-500 mb-0">{auth?.user?.lastName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="flex mb-4">
                                    <div className="w-1/3 ml-[6rem]">
                                        <h5 className="mb-0">Email</h5>
                                    </div>
                                    <div className="w-1/6">
                                        <p className="text-gray-500 mb-0">:</p>
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-gray-500 mb-0">{auth?.user?.email}</p>
                                    </div>
                                </div>
                                <hr />
                                
                            </CardContent>
                    </div>
                </div>
            </Card>
        </section>
    );
};

export default ProfilePage;



