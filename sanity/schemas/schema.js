// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import settings from "./settings";
import projects from "./projects";
import uses from "./uses";
import blog from "./blog/blog";
import post from "./blog/post";
import blockContent from "./blockContent";
import blockImage from "./blockImage";
import blockTech from "./blockTech";
import technologies from "./technologies";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    settings,
    projects,
    uses,
    blockContent,
    blockImage,
    blockTech,
    technologies,
    blog,
    post,
  ]),
});
