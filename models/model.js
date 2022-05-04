module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        _id: Object, 
        listing_url: String,
        name: String,
        summary:String,
        space:String,
        description:String,
        neighborhood_overview: String,
        notes: String,
        transit: String,
        access:String,
        interaction: String,
        house_rules : String,
        property_type:String,
        room_type:String,
        bed_type :String,
        minimum_nights :Number,
        maximum_nights: Number,
        cancellation_policy:String,
        last_scraped : Date,
        updated: { type: Date, default: Date.now() }
      }
    );
  
    schema.method("toJSON", function() {
      const { _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Property = mongoose.model("property", schema);
    return Property;
  };
  