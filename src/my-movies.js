/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@fluidnext-polymer/paper-pagination/paper-pagination';
import '@fluidnext-polymer/paper-pagination/icons/paper-pagination-icons';

class MyMovies extends PolymerElement {
  constructor(){
    super();
    this.page=0;
  }
  static get properties () {
    return {
      queryParams: {
        type: Number,
        value: '1'
      },
      routeData: Object,
      subroute: Object
    }
  }
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <app-location id="location"
        route="{{route}}"
        url-space-regex="^[[rootPath]]"
        >
      </app-location>
        <template is="dom-repeat" items="{{mymovies}}">  
          <div class="card">
            <div class="circle">{{item.id}}</div>
            <h1>{{item.name}}</h1>
            <p><b>Release Year:</b></p>
            <p>{{item.releaseYear}}</p>
          </div>
        </template>
        <template is="dom-repeat" items="{{postcount}}">  
            <paper-pagination page="{{current}}" total-items="{{item.total}}" item-per-page="4" next-icon="paper-pagination:next-arrow" previous-icon="paper-pagination:previous-arrow">
            </paper-pagination>
        </template>
    `;
  }
  static get observers() {
    return [
        '_currentPageChange(current)'
    ]
  }

  _currentPageChange(c){
    let location = this.$.location;
    this.page=c;
    var params = this.queryParams;
    if(this.page != 1){
      params = Math.pow(2, this.page);
      location.path = `/view1/${this.page}`;
      fetch(`http://localhost:3000/movies/${params}`)
      .then(res => res.json())
      .then(mymovies => this.mymovies = mymovies)
    }else{
      params = 0;
      location.path = `/view1/${this.page}`;
      fetch(`http://localhost:3000/movies/${params}`)
      .then(res => res.json())
      .then(mymovies => this.mymovies = mymovies)
    }
  }
  connectedCallback(){
    debugger;
    super.connectedCallback();
    fetch('http://localhost:3000/movies/0')
    .then(res => res.json())
    .then(mymovies => this.mymovies = mymovies)
    fetch(`http://localhost:3000/moviescount`)
    .then(res => res.json())
    .then(postcount => this.postcount = postcount)
  }
  
}

window.customElements.define('my-movies', MyMovies);
