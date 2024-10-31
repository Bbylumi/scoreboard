import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Player {
  name: string;
  points: number;
}

@Component({
  selector: 'app-add-points',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-points.component.html',
  styleUrls: ['./add-points.component.css'],  
})
export class AddPointsComponent {
  name: string = '';
  points: number | null = null;

  // this will fetch scores from the local storage
  getScores(): Player[] {
    const scores = localStorage.getItem('scores');
    return scores ? JSON.parse(scores) : [];
  }

  // this will save scores to local storage
  saveScores(scores: Player[]): void {
    localStorage.setItem('scores', JSON.stringify(scores));
  }

  // this will add points to the player's score or create a new player
  addPoints(): void {
    const trimmedName = this.name.trim();
    const pointsValue = this.points;

    if (!trimmedName || pointsValue === null || pointsValue <= 0) {
      alert('Please enter a valid name and points.');
      return;
    }

    const scores = this.getScores();
    const existingPlayer = scores.find(
      (player) => player.name.toLowerCase() === trimmedName.toLowerCase()
    );

    if (existingPlayer) {
      existingPlayer.points += pointsValue; // Add points to existing player
    } else {
      scores.push({ name: trimmedName, points: pointsValue }); // Add new player
    }

    this.saveScores(scores); // Save updated scores to local storage

    // Reset form
    this.name = '';
    this.points = null;
  }
}
