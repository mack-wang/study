## 类比
#### 双向绑定
[(ngModel)]="hero.name" 同 v-model="hero.name"

#### 遍历循环
*ngFor="let hero of heroes" 同 v-for="hero in heroes"

#### 事件绑定
(click)="onSelect(hero)" 同 @click="onSelect(hero)"

#### 添加class，变化class
[class.selected]="hero === selectedHero" 同 :class="{selected: hero === selectedHero}"
