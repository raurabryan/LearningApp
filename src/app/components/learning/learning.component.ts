import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../model/Course';
import { LearningService } from '../../services/learning.service';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {
  learningData!: Course;

  constructor(private learningService: LearningService) {  }

  ngOnInit(): void {
    this.learningData = this.learningService.getCourse();
  }
}

