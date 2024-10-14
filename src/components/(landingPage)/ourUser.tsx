import React from 'react';
import Image from "next/image";

interface ContentProps {
    img: string;
    details: string;
    username: string;
    type: string;
}

function OurUser(): JSX.Element {
    return (
        <div className='flex flex-col lg:flex-row gap-6 p-4'>
            <Content
                img="/images/user1.png"
                username="Sarah T."
                type="Court Clerk"
                details="Legal Speech Processing has completely transformed how we handle court transcripts. As a court clerk, I used to spend hours manually transcribing audio recordings. Now, with LSP’s AI-driven tool, I can generate accurate transcripts in a fraction of the time. It's been a game-changer for the entire legal team, making case preparation faster and more efficient."
            />
            <Content
                img="/images/user2.png"
                username="David M."
                type="Defense Attorney"
                details="We needed a transcription solution that could handle complex legal terminology, and LSP delivered. The software is impressively accurate, even with heavy accents and technical language. Our legal team now trusts LSP for all our transcription needs, and it has helped us focus more on building our cases rather than worrying about transcript accuracy."
            />
            <Content
                img="/images/user3.png"
                username="Maria R."
                type="Paralegal"
                details="Legal Speech Processing has saved our firm both time and money. Before using LSP, we outsourced our transcription services, which was both costly and slow. Now, with LSP, we can generate high-quality transcripts in-house, quickly and at a much lower cost. It has been an invaluable tool for streamlining our workflow."
            />
        </div>
    );
}

export default OurUser;

function Content({ img, details, username, type }: ContentProps): JSX.Element {
    return (
        <div className="p-10 bg-white rounded-2xl">
            <p className="text-gray-700 text-justify">{details}</p>
            <div className="flex items-center mt-6 gap-4">
                <Image
                    src={img}
                    alt="User image"
                    width={50}
                    height={50}
                    className="rounded-full"
                />
                <div className="ml-2">
                    <p className="font-semibold text-lg">{username}</p>
                    <p className="text-sm text-gray-500">{type}</p>
                </div>
            </div>
        </div>
    );
}
