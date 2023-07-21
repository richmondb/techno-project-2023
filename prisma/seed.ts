import prisma from './client'


async function main() {

    // var i: number = 0;

    // await prisma.user.create({
    //     data: {
    //         first_name: 'richmond',
    //         middle_name: 'olbinado',
    //         last_name: 'billones',
    //         gender: 'M',
    //         address: 'blk 9 lot 16',
    // });

    // while (i < 10) {
    //     var maker = await prisma.farmOwner.create({
    //         data: {
    //             first_name: 'richmond',
    //             middle_name: 'olbinado',
    //             last_name: 'billones',
    //             gender: 'M',
    //             address: 'blk 9 lot 16 d&a vicente village B.S.Q.C.',
    //             phone_num: '09472118385',
    //             farm: {
    //                 create: {
    //                     farm_name: 'richmond\'s farm',
    //                     farm_desc: 'a simple farm',
    //                     farm_address: 'Luzon, Philippines',
    //                     farm_size: '3 hectares',
    //                     target_amt: 15000,
    //                     farm_crop: 'rice',
    //                     crop_lifetime: 90,
    //                     farm_pic: '',
    //                     farmer_pic: '',
    //                     globalfarmstatus: {
    //                         create: {
    //                             global_status: 0,
    //                             global_amt_raise: 0,
    //                             global_interest: 0,
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //     });
    //     console.log(maker);
    //     i++;
    // }


    const f1 = await prisma.farmOwner.create({
        data: {
            first_name: 'Janet',
            middle_name: 'olbinado',
            last_name: 'Olmo',
            gender: 'F',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Janet\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'NUEVA ECIJA, PHILIPPINES',
                    farm_size: '2 hectares',
                    target_amt: 25000,
                    farm_crop: 'rice',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });
    const f2 = await prisma.farmOwner.create({
        data: {
            first_name: 'Anna',
            middle_name: 'olbinado',
            last_name: 'Meri',
            gender: 'F',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Anna\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'BULACAN, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 15000,
                    farm_crop: 'rice',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });
    const f3 = await prisma.farmOwner.create({
        data: {
            first_name: 'Ernesto',
            middle_name: 'olbinado',
            last_name: 'Muhi',
            gender: 'M',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Ernesto\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'BULACAN, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 30000,
                    farm_crop: 'vegetable',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });
    const f4 = await prisma.farmOwner.create({
        data: {
            first_name: 'Marites',
            middle_name: 'olbinado',
            last_name: 'Jose',
            gender: 'M',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Marites\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'NUEVA ECIJA, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 15000,
                    farm_crop: 'rice',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });
    const f5 = await prisma.farmOwner.create({
        data: {
            first_name: 'Rolando',
            middle_name: 'olbinado',
            last_name: 'Kawi',
            gender: 'M',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Sammy\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'NUEVA ECIJA, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 25000,
                    farm_crop: 'vegetables',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });
    const f6 = await prisma.farmOwner.create({
        data: {
            first_name: 'Richmond',
            middle_name: 'olbinado',
            last_name: 'Billones',
            gender: 'M',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Richmond\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'QUEZON CITY, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 20000,
                    farm_crop: 'vegetables',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });

    const f7 = await prisma.farmOwner.create({
        data: {
            first_name: 'Delby',
            middle_name: 'olbinado',
            last_name: 'Namoro',
            gender: 'F',
            address: 'Test address',
            phone_num: '',
            farm: {
                create: {
                    farm_name: 'Delby\'s farm',
                    farm_desc: 'A simple farm',
                    farm_address: 'QUEZON CITY, PHILIPPINES',
                    farm_size: '3 hectares',
                    target_amt: 15000,
                    farm_crop: 'vegetables',
                    crop_lifetime: 60,
                    farm_pic: '',
                    farmer_pic: '',
                }
            }
        }
    });

}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    });