/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Transaction as PrismaTransaction,
  Service as PrismaService,
} from "@prisma/client";

export class TransactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TransactionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.transaction.count(args);
  }

  async transactions(
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.transaction.findMany(args);
  }
  async transaction(
    args: Prisma.TransactionFindUniqueArgs
  ): Promise<PrismaTransaction | null> {
    return this.prisma.transaction.findUnique(args);
  }
  async createTransaction(
    args: Prisma.TransactionCreateArgs
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.create(args);
  }
  async updateTransaction(
    args: Prisma.TransactionUpdateArgs
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.update(args);
  }
  async deleteTransaction(
    args: Prisma.TransactionDeleteArgs
  ): Promise<PrismaTransaction> {
    return this.prisma.transaction.delete(args);
  }

  async getService(parentId: string): Promise<PrismaService | null> {
    return this.prisma.transaction
      .findUnique({
        where: { id: parentId },
      })
      .service();
  }
}
