import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { QuestionService } from './question.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Controller('question')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Get(':id')
  findQuestionList(@Param('id') id: string) {
    return this.questionService.findQuestionList(id);
  }

  @Post('/add')
  createAddQuestion(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionService.createAddQuestion(createQuestionDto);
  }

  @Get('/add')
  findAddQuestionList(@Param('id') id: string) {
    return this.questionService.findAddQuestionList(id);
  }

  @Patch('/add')
  updateAddQuesiton(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionService.updateAddQuesiton(id, updateQuestionDto);
  }

  @Delete('/add')
  removeAddQuesiton(@Param('id') id: string) {
    return this.questionService.removeAddQuesiton(id);
  }
}
