-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `first_name` VARCHAR(191) NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `birthday` DATETIME(3) NULL,
    `phone_num` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `email_verified` DATETIME(3) NULL,
    `user_image` LONGBLOB NULL,
    `walletId` INTEGER NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_walletId_key`(`walletId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wallet` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `balance` INTEGER NULL DEFAULT 0,
    `currency` VARCHAR(191) NULL DEFAULT 'Pesos',
    `userId` INTEGER NULL,

    UNIQUE INDEX `Wallet_userId_key`(`userId`),
    INDEX `Wallet_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contract` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` INTEGER NULL,
    `invested_amount` DECIMAL(10, 2) NULL DEFAULT 0,
    `expected_payout` DECIMAL(10, 2) NULL DEFAULT 0,
    `payment_method` VARCHAR(191) NULL,
    `payment_date` DATETIME(3) NULL,
    `payment_status` VARCHAR(191) NULL,
    `payment_amount` DECIMAL(10, 2) NULL DEFAULT 0,
    `date_started` DATETIME(3) NULL,
    `date_ended` DATETIME(3) NULL,
    `farmId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Contract_farmId_key`(`farmId`),
    INDEX `Contract_userId_farmId_idx`(`userId`, `farmId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `GlobalFarmStatus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `global_status` INTEGER NULL DEFAULT 0,
    `global_interest` DECIMAL(10, 3) NULL DEFAULT 0.045,
    `global_amt_raise` DECIMAL(10, 2) NULL DEFAULT 0,
    `farmId` INTEGER NOT NULL,

    UNIQUE INDEX `GlobalFarmStatus_farmId_key`(`farmId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FarmOwner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NULL,
    `middle_name` VARCHAR(191) NULL,
    `last_name` VARCHAR(191) NULL,
    `gender` CHAR(1) NULL,
    `address` VARCHAR(191) NULL,
    `phone_num` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Farm` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `farm_name` VARCHAR(191) NULL,
    `farm_desc` VARCHAR(191) NULL,
    `farm_address` VARCHAR(191) NULL,
    `farm_size` VARCHAR(191) NULL,
    `target_amt` DECIMAL(10, 2) NULL DEFAULT 0,
    `farm_crop` VARCHAR(191) NULL,
    `crop_lifetime` INTEGER NULL DEFAULT 0,
    `farm_pic` VARCHAR(191) NULL,
    `farmer_pic` VARCHAR(191) NULL,
    `farmOwnerId` INTEGER NULL,
    `globalfarmstatusId` INTEGER NULL,

    UNIQUE INDEX `Farm_farmOwnerId_key`(`farmOwnerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
