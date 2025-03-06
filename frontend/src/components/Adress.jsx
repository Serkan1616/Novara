import React, { useState } from "react";
import { Button, Typography, Input, Select, Option } from "@material-tailwind/react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Address = () => {
    const [address, setAddress] = useState({
        fullName: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        postalCode: "",
        country: "Turkey",
    });

    const [location, setLocation] = useState([41.0082, 28.9784]); // Varsayılan: İstanbul koordinatları

    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                {/* Sol Taraf - Adres Formu */}
                <div className="space-y-6 bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-8">Shipping Address</h2>

                    <div className="space-y-4">
                        <Input label="Full Name" name="fullName" value={address.fullName} onChange={handleChange} required />
                        <Input label="Address Line 1" name="addressLine1" value={address.addressLine1} onChange={handleChange} required />
                        <Input label="Address Line 2 (Optional)" name="addressLine2" value={address.addressLine2} onChange={handleChange} />
                        <div className="grid grid-cols-2 gap-4">
                            <Input label="City" name="city" value={address.city} onChange={handleChange} required />
                            <Input label="Postal Code" name="postalCode" value={address.postalCode} onChange={handleChange} required />
                        </div>
                        <Select label="Country" value={address.country} onChange={(val) => setAddress({ ...address, country: val })}>
                            <Option value="Turkey">Turkey</Option>
                            <Option value="Germany">Germany</Option>
                            <Option value="United States">United States</Option>
                            <Option value="United Kingdom">United Kingdom</Option>
                        </Select>
                    </div>

                    <Button className="w-full mt-6 bg-blue-500 text-white">Save Address</Button>
                </div>

                {/* Sağ Taraf - Harita */}
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">Select Location</h2>

                    <MapContainer center={location} zoom={13} className="h-80 w-full rounded-lg">
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={location} />
                        <LocationMarker setLocation={setLocation} />
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

// Kullanıcının haritaya tıklayarak konum seçmesini sağlayan bileşen
const LocationMarker = ({ setLocation }) => {
    useMapEvents({
        click(e) {
            setLocation([e.latlng.lat, e.latlng.lng]);
        },
    });
    return null;
};

export default Address;
