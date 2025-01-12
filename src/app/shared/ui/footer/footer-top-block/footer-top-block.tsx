import React from 'react';
import LogoWithTitle from '@/app/shared/ui/logo-variants/logo-with-title/logo-with-title';
import {TitleColor} from '@/app/shared/ui/logo-variants/logo-with-title/logo-with-title.enums';
import FooterSubscribeForm from '@/app/shared/ui/forms/footer-subscribe-form/footer-subscribe-form';

const FooterTopBlock: React.FC = () => {
    return (
        <div className={'w-full bg-gray-0.5 h-[162px]'}>
            <div className={'flex justify-center lg:mx-[20px] xl:mx-0'}>
                <div className={'flex flex-row w-full max-w-base-width lg:gap-[80px] xl:gap-[114px]'}>
                    <div className={'py-[65px]'}>
                        <LogoWithTitle titleColor={TitleColor.DARK}/>
                    </div>
                    <div className={'flex flex-row gap-[60px] h-full w-full'}>
                        <div className={'flex flex-col gap-1 lg:w-[320px] xl:w-[448px]'}>
                            <span className={'text-gray-9 text-body-xxl font-medium leading-body mt-[50.5px] '}>
                                Subscribe our Newsletter
                            </span>
                            <span className={'text-gray-4 text-body-small font-medium leading-body'}>
                                Pellentesque eu nibh eget mauris congue mattis matti.
                            </span>
                        </div>
                        <div className={'mt-[55.5px] flex-1'}>
                            <FooterSubscribeForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterTopBlock;
