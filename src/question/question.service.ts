import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionService {
  findQuestionList(id: string) {
    return {
      commonQues: {
        questionType: 'common',
        waitDate: '2022.03.01 00:00',
        commitDate: '2022.03.02 00:00',
        recordList: [
          {
            questionNo: 1,
            question:
              '지원한 직무를 수행하기 위해 노력한 경험에 대해 발표 하세요.',
            limitTime: '3',
            videoSrc: 'https://www.youtube.com/embed/15zVUBFghVA',
          },
          {
            questionNo: 2,
            question: '지원한 직무를 경험에 대해 발표 하세요.',
            limitTime: '2',
            videoSrc: 'https://www.youtube.com/embed/15zVUBFghVA',
          },
          {
            questionNo: 3,
            question:
              '직무를 진행하면서 질문 제목이 두 줄이 들어가는 경우는 이렇게 보여집니다.여기에 직무를 수행하기 위해 노력한 경험에 대해 발표 하세요. 최대 몇 줄이 들어갈까요?',
            limitTime: '3',
            videoSrc: '',
          },
        ],
      },
      individualQues: {
        questionType: 'individual',
        waitDate: '2022.04.01 00:00',
        commitDate: '2022.04.02 00:00',
        recordList: [
          {
            questionNo: 1,
            question:
              '지원한 직무를 수행하기 위해 노력한 경험에 대해 발표 하세요.',
            limitTime: '3',
            videoSrc: 'https://www.youtube.com/embed/15zVUBFghVA',
          },
          {
            questionNo: 2,
            question: '지원한 직무를 경험에 대해 발표 하세요.',
            limitTime: '2',
            videoSrc: '',
          },
          {
            questionNo: 3,
            question:
              '직무를 진행하면서 질문 제목이 두 줄이 들어가는 경우는 이렇게 보여집니다.여기에 직무를 수행하기 위해 노력한 경험에 대해 발표 하세요. 최대 몇 줄이 들어갈까요?',
            limitTime: '3',
            videoSrc: '',
          },
        ],
      },
      addQues: {
        questionType: 'add',
        waitDate: '2022.05.01 00:00',
        commitDate: '2022.05.02 00:00',
        recordList: [],
      },
    };
  }

  createAddQuestion(createQuestionDto: CreateQuestionDto) {
    return 'createAddQuestion';
  }

  findAddQuestionList(id: string) {
    return `findAddQuestionList`;
  }

  updateAddQuesiton(id: string, updateQuestionDto: UpdateQuestionDto) {
    return `updateAddQuesiton`;
  }

  removeAddQuesiton(id: string) {
    return `removeAddQuesiton`;
  }
}