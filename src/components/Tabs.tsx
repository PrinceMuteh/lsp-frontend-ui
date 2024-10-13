'use client';

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Image from "next/image";

const Tab = () => {
    return (
        <Tabs defaultValue="Judges" className="w-full">
            <TabsList className="grid grid-cols-2 bg-white">
                <TabsTrigger value="Judges" className="px-4 py-2 mx-2 text-black rounded-full">Judges</TabsTrigger>
                <TabsTrigger value="clerk" className="px-4 py-2 mx-2 text-black rounded-full">Clerk</TabsTrigger>
            </TabsList>

            <TabsContent value="Judges" className="border-none mt-10">
                <div className="flex flex-col md:flex-row-reverse justify-between">
                    <div className="h-[300px] w-full md:h-[400px] md:w-[450px] mt-4 md:mt-0">
                        <Image
                            src="/images/Judge.png"
                            alt="Logo"
                            width={900}
                            height={900}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="gap-4 md:gap-10 rounded-lg">
                        <div className="w-full md:w-4/5 gap-6 grid text-start">
                            <h2 className="font-semibold text-xl">Record Court Proceeding</h2>
                            <p className="text-t-14 mt-5">Speed up court proceedings and allow judges to focus on decision-making with accurate AI-powered transcription.</p>
                            <ul className="list-disc ml-5 mt-5 text-t-14">
                                <li>Easily record all courtroom proceedings.</li>
                                <li>View all court proceeding transcripts.</li>
                            </ul>
                            <div className="customGreen w-full md:w-52 flex mt-10 rounded-lg p-4 text-center bg-black text-white text-md font-semibold">
                                Request Free Demo
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent value="clerk" className="border-none mt-10">
                <div className="flex flex-col md:flex-row-reverse justify-between">
                    <div className="h-[300px] w-full md:h-[400px] md:w-[400px] mt-4 md:mt-0">
                        <Image
                            src="/images/lawyer.png"
                            alt="Logo"
                            width={900}
                            height={900}
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="gap-4 md:gap-10 rounded-lg">
                        <div className="w-full md:w-4/5 gap-6 grid text-start">
                            <h2 className="font-semibold text-xl">View and Manage Cases</h2>
                            <p className="text-t-14 mt-5">Easily locate key information from past records, even with minimal details.</p>
                            <ul className="list-disc ml-5 mt-5 text-t-14">
                                <li>Access case types instantly, such as criminal or civil.</li>
                                <li>Locate case files quickly using their serial number.</li>
                                <li>Access all transcripts related to media files.</li>
                            </ul>
                            <div className="customGreen w-full md:w-52 flex mt-10 rounded-lg p-4 text-center bg-black text-white text-md font-semibold">
                                Request Free Demo
                            </div>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
    );
};

export default Tab;
