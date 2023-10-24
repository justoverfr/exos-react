import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usersData from "@/resources/users.json";
import { User } from "@/types";
import { Tag } from "@/components/tag";

import "@/styles/profile.css";
import { Send } from "lucide-react";

export default function UserProfile() {
  const { id } = useParams<{ id: string }>();
  const parsedId = parseInt(id || "0", 10);

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const foundUser = usersData.find((u) => u.id === parsedId);
    setUser(foundUser || null);
  }, [parsedId]);

  if (!user || !id) return <div>Utilisateur non trouvé</div>;

  return (
    <div className="profile-card">
      <div className="profile-picture">
        <img src={user.picture_url} alt="profile" />
      </div>

      <h1 className="profile-name">
        {user.first_name} {user.last_name}
      </h1>

      <h2 className="profile-title">{user.title}</h2>

      <div className="profile-tags">
        {user.tags.map((tag) => (
          <Tag label={tag} />
        ))}
      </div>

      <p className="profile-bio">{user.bio}</p>

      <div className="stats-container">
        <div className="stats-display">
          <h4 className="stats-number">{user.relations}</h4>
          <h3 className="stats-name">Relations</h3>
        </div>

        <div className="stats-display">
          <h4 className="stats-number">{user.publications}</h4>
          <h3 className="stats-name">Publications</h3>
        </div>
      </div>

      <div className="contact-button-container">
        <button className="contact-button">
          <Send size={40} />
        </button>
      </div>
    </div>
  );
}
