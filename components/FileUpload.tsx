"use client";

import { IKImage, ImageKitProvider, IKUpload, IKVideo } from "imagekitio-next";
import config from "@/lib/config";
import ImageKit from "imagekit";
import React, { useRef, useState } from 'react'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";

const {
    env: {
        imagekit: { publicKey, urlEndpoint },
    },
} = config;

const authenticator = async () => {
    try {
        const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

        if (!response.ok) {
            const errorText = await response.text();

            throw new Error(
                `Request failed with status ${response.status}: ${errorText}`,
            );
        }
        const data = await response.json();

        const { signature, expire, token } = data;

        return { token, expire, signature };
    } catch (error: any) {
        throw new Error(`Authentication request failed: ${error.message}`);
    }
};

const FileUpload = ({onFileChange}:{onFileChange : (filepath : string) => void}) => {
    const ikUploadRef = useRef(null);
    const [file, setFile] = useState<{ filePath: string | null }>(
        // filePath: value ?? null,
    );
    const [progress, setProgress] = useState(0);

    const onError = (error: any) => {
        console.log(error);

        toast({
            title: ` upload failed`,
            description: `Your could not be uploaded. Please try again.`,
            variant: "destructive",
        });
    };

    const onSuccess = (res: any) => {
        setFile(res);
        onFileChange(res.filePath);

        toast({
            title: ` uploaded successfully`,
            description: `${res.filePath} uploaded successfully!`,
        });
    };

    return (
        <ImageKitProvider
            publicKey={publicKey}
            urlEndpoint={urlEndpoint}
            authenticator={authenticator}
        >
            <IKUpload
                ref={ikUploadRef}
                onError={onError}
                onSuccess={onSuccess}
                className="hidden"
            />
            <button
                className={cn("upload-btn")}
                onClick={(e) => {
                    e.preventDefault()
                    if (ikUploadRef.current) {
                        // @ts-ignore
                        ikUploadRef.current?.click();
                    }
                }}>
                <Image
                    src="/icons/upload.svg"
                    alt="upload-icon"
                    width={20}
                    height={20}
                    className="object-contain"
                />

                <p className={cn("text-base")}>upload a document</p>

                {file && (
                    <p className={cn("upload-filename")}>{file.filePath}</p>
                )}
            </button>

            {file &&
            <IKImage
                alt={file.filePath}
                path={file.filePath}
                width={500}
                height={380}
            />}

        </ImageKitProvider>



    )
}

export default FileUpload