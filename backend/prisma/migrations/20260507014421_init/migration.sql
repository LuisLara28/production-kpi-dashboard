-- CreateTable
CREATE TABLE `ProductionRecord` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` VARCHAR(191) NOT NULL,
    `shift` VARCHAR(191) NOT NULL,
    `line` VARCHAR(191) NOT NULL,
    `product` VARCHAR(191) NOT NULL,
    `plannedQty` INTEGER NOT NULL,
    `actualQty` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
