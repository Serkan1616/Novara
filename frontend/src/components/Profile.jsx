import React, { useState } from "react";
import { Button, Typography, Input, Avatar, Card } from "@material-tailwind/react";
import profilImage from "../assets/profil.jpeg";

const Profile = () => {
    const [user, setUser] = useState({
        fullName: "Serkan Durmaz",
        email: "johndoe@example.com",
        phone: "+1 234 567 890",
        address: "123 Main Street, New York, USA",
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Sol Taraf - Kullanıcı Bilgileri */}
                <Card className="p-6 shadow-lg rounded-lg bg-white">
                    <div className="flex flex-col items-center">
                        <Avatar src={profilImage} alt="Profile" size="xl" className="mb-4" />
                        <Typography variant="h4" color="blue-gray">{user.fullName}</Typography>
                        <Typography variant="small" color="gray">{user.email}</Typography>
                    </div>

                    <div className="mt-6 space-y-4">
                        <Input label="Full Name" name="fullName" value={user.fullName} onChange={handleChange} required />
                        <Input label="Email" name="email" value={user.email} onChange={handleChange} required />
                        <Input label="Phone" name="phone" value={user.phone} onChange={handleChange} required />
                        <Input label="Address" name="address" value={user.address} onChange={handleChange} required />
                    </div>

                    <Button className="w-full mt-6 bg-blue-500 text-white">Update Profile</Button>
                </Card>

                {/* Sağ Taraf - Ekstra Ayarlar */}
                <div className="space-y-6">

                    {/* Şifre Güncelleme */}
                    <Card className="p-6 shadow-lg rounded-lg bg-white">
                        <Typography variant="h5" color="blue-gray" className="mb-4">Change Password</Typography>
                        <Input type="password" label="Current Password" required />
                        <Input type="password" label="New Password" required />
                        <Input type="password" label="Confirm Password" required />
                        <Button className="w-full mt-4 bg-red-500 text-white">Update Password</Button>
                    </Card>

                    {/* Sipariş Geçmişi */}
                    <Card className="p-6 shadow-lg rounded-lg bg-white">
                        <Typography variant="h5" color="blue-gray" className="mb-4">Order History</Typography>
                        <div className="space-y-2">
                            <Typography variant="small" color="gray">📦 Order #12345 - Delivered</Typography>
                            <Typography variant="small" color="gray">📦 Order #67890 - Processing</Typography>
                            <Typography variant="small" color="gray">📦 Order #54321 - Cancelled</Typography>
                        </div>
                        <Button className="w-full mt-4 bg-gray-800 text-white">View All Orders</Button>
                    </Card>

                </div>
            </div>
        </div>
    );
};

export default Profile;
