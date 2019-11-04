// import { prisma } from "../../../../generated/prisma-client";
export default {
  Query: {
    userById: (_, args, context, info) => {
      const { id } = args;
      //   return prisma.user({ id });
      return context.prisma.query.user({ where: { id } }, info);
    }
  }
};
