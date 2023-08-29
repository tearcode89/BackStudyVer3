import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// The GraphQL schema
const typeDefs = `#graphql
  input CreateBoardInput {
      writer: String
      title: String
      contents: String
  }

  type BoardReturn {
    number: Int
    writer: String
    title: String
    contents: String
  }
  
  type Query {
    # fetchBoards: BoardReturn => 객체 1개를 의미
    fetchBoards: [BoardReturn] # => 배열 안에 객체 1개 이상을 의미
  }
  
  type Mutation {
    createBoard(writer: String, title: String, contents: String): String
    createBoard2(createBoardInput: CreateBoardInput): String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        fetchBoards: () => {
            // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
                const result = [
                    { number: 1, writer: "김채원", title: "너 내 동료가 되어라", contents: "저는 좀 귀여워요"},
                    { number: 2, writer: "미야와키 사쿠라", title: "너 내 동료가 되어라", contents: "저는 좀 귀여워요"},
                    { number: 3, writer: "나카무라 카즈하", title: "너 내 동료가 되어라", contents: "저는 좀 귀여워요"},
                ]
            // 2. 꺼내온 결과 응답 주기
            return result;
        }
    },

    Mutation: {
        createBoard: (parent, args, context, info) => {
            // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 저장하기
            console.log(args)

            // 2. 저장결과 알려주기 !!
            return "등록에 성공하셨어요"
        },

        createBoard2: (_, args) => {
            // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 저장하기
            console.log(args)

            // 2. 저장결과 알려주기 !!
            return "등록에 성공하셨어요"
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server);
console.log(`🚀 Server ready at ${url}`);