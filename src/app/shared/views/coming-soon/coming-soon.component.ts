import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="text-center">
      <h1 class="text-6xl font-bold text-white mb-4">Plani Food</h1>
      <h2 class="text-2xl font-semibold text-white opacity-75">Coming Soon</h2>
    </div>
  `,
  host: {
    class: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-screen flex items-center justify-center',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComingSoonComponent { }
