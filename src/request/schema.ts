 const schema: string = "query AllFilms {\n" +
     "  sWAPI_Films(order: [releaseDate_ASC]) {\n" +
     "\t\tcount\n" +
     "\t\tedges {\n" +
     "\t\t\tnode {\n" +
     "\t\t\t\tid\n" +
     "\t\t\t\ttitle\n" +
     "\t\t\t\tdirector\n" +
     "\t\t\t\tepisodeId\n" +
     "\t\t\t\tcreatedAt\n" +
     "\t\t\t\tproducer\n" +
     "\t\t\t\treleaseDate\n" +
     "\t\t\t\tupdatedAt\n" +
     "\t\t\t\tcharacters {\n" +
     "\t\t\t\t\tcount\n" +
     "\t\t\t\t\tedges {\n" +
     "\t\t\t\t\t\tnode {\n" +
     "\t\t\t\t\t\t\tid\n" +
     "\t\t\t\t\t\t\tname\n" +
     "\t\t\t\t\t\t}\n" +
     "\t\t\t\t\t}\n" +
     "\t\t\t\t}\n" +
     "\t\t\t\tplanets {\n" +
     "\t\t\t\t\tcount\n" +
     "\t\t\t\t\tedges {\n" +
     "\t\t\t\t\t\tnode {\n" +
     "\t\t\t\t\t\t\tid\n" +
     "\t\t\t\t\t\t\tname\n" +
     "\t\t\t\t\t\t}\n" +
     "\t\t\t\t\t}\n" +
     "\t\t\t\t}\n" +
     "\t\t\t}\n" +
     "\t\t}\n" +
     "\t}\n" +
     "}";

 export default schema;