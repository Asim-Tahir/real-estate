import {
  Module,
  VuexModule,
  Mutation,
  Action,
  getModule,
} from "vuex-module-decorators";

@Module
class Appointments extends VuexModule {
  appointments = [];

  // @Mutation
  // increment(delta: number): void {
  //   this.count += delta;
  // }
  // @Mutation
  // decrement(delta: number): void {
  //   this.count -= delta;
  // }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: "increment" })
  incr(): number {
    return 5;
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: "decrement" })
  decr(): number {
    return 5;
  }
}

export default getModule(Appointments);
