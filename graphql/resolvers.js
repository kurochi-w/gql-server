import Memo from './memo'

const resolvers = {
    Query: {
        memo: (_, { memo_no }) => Memo.findOne({ memo_no }),
        memos: () => Memo.find({}),
    },

    Mutation: {
        addMemo: async (_, { memo_no, title, content }) => {
            let memo = new Memo({
                memo_no,
                title,
                content
            });
            const error = await memo.save();
            if (error) return error;

            return memo;
        }
    }
}

export default resolvers;