import {HttpClientModule} from "@angular/common/http"
import {ComponentFixture, TestBed} from '@angular/core/testing'
import {Movie} from "../../../common/models/Movie.model"
import {SharedModule} from "../../../common/shared.module"
import {MovieService} from "../../services/movie.service"

import {MovieCardComponent} from './movie-card.component'

describe('MovieCardComponent', () => {
  let component: MovieCardComponent
  let fixture: ComponentFixture<MovieCardComponent>
  const movie = {
    "adult": false,
    "backdrop_path": "/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
    "genre_ids": [
      28,
      878,
      12
    ],
    "id": 588228,
    "original_language": "en",
    "original_title": "The Tomorrow War",
    "overview": "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester. Determined to save the world for his young daughter, Dan teams up with a brilliant scientist and his estranged father in a desperate quest to rewrite the fate of the planet.",
    "popularity": 3368.737,
    "poster_path": "/34nDCQZwaEvsy4CFO5hkGRFDCVU.jpg",
    "release_date": "2021-09-03",
    "title": "The Tomorrow War",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 271
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieCardComponent],
      imports: [
        HttpClientModule,
        SharedModule
      ],
      providers: [
        MovieService
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent)
    component = fixture.componentInstance
    component.movie = new Movie(movie)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
