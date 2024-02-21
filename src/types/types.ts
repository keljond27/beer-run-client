export type Addition = {
  id: string,
  name: string,
  note: string,
}

export type Additions = {
  amount: string,
  boil_schedule: string,
  addition: Addition,
}

export type Fermentable = {
  id: string,
  name: string,
  note: string,
}

export type Fermentables = {
  amount: string,
  fermentable: Fermentable,
}

export type Hop = {
  id: string,
  name: string,
  note: string,
}

export type Hops = {
  amount: string,
  boil_schedule: string,
  hop: Hop,
}

export type Yeast = {
  id: string,
  name: string,
  note: string,
}

export type Yeasts = {
  amount: string,
  yeast: Yeast,
}

export type Recipe = {
  id: string,
  associated_profile_id: string,
  name: string,
  type: Type,
  notes: string,
  start_time: string,
  end_time: string,
  original_gravity: string,
  final_gravity: string,
  ibu: string,
  abv: string,
  fermentables: Array<Fermentables>,
  hops: Array<Hops>,
  yeasts: Array<Yeasts>,
  additions: Array<Additions>,
}

export type Profile = {
  id: string,
  associated_user_id: string,
  name: string,
  type: Type,
  foundry_size: string,
  batch_size: string,
  voltage: string,
  sparge: string,
  grain_amount: string,
}

export type User = {
  id: string,
  name: string,
  email: string,
}

export type Type = {
  id: string,
  name: string,
  notes: string,
}