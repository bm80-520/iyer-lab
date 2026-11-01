export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      admins: {
        Row: {
          created_at: string;
          user_id: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      media: {
        Row: {
          alt_text: string;
          bucket: string;
          description: string;
          file_size: number;
          file_type: string;
          filename: string;
          height: number | null;
          id: string;
          storage_path: string;
          thumbnail_path: string | null;
          updated_at: string;
          uploaded_at: string;
          width: number | null;
        };
        ComputedFields: never;
        Insert: {
          alt_text?: string;
          bucket?: string;
          description?: string;
          file_size: number;
          file_type: string;
          filename: string;
          height?: number | null;
          id?: string;
          storage_path: string;
          thumbnail_path?: string | null;
          updated_at?: string;
          uploaded_at?: string;
          width?: number | null;
        };
        Update: {
          alt_text?: string;
          bucket?: string;
          description?: string;
          file_size?: number;
          file_type?: string;
          filename?: string;
          height?: number | null;
          id?: string;
          storage_path?: string;
          thumbnail_path?: string | null;
          updated_at?: string;
          uploaded_at?: string;
          width?: number | null;
        };
        Relationships: [];
      };
      news: {
        Row: {
          article_image_id: string | null;
          category: string;
          content: string;
          created_at: string;
          deleted_at: string | null;
          external_link_text: string;
          external_url: string;
          id: string;
          image_alt_text: string;
          image_id: string | null;
          publication_date: string;
          slug: string;
          status: Database['public']['Enums']['content_status'];
          title: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          article_image_id?: string | null;
          category?: string;
          content?: string;
          created_at?: string;
          deleted_at?: string | null;
          external_link_text?: string;
          external_url?: string;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          publication_date: string;
          slug: string;
          status?: Database['public']['Enums']['content_status'];
          title: string;
          updated_at?: string;
        };
        Update: {
          article_image_id?: string | null;
          category?: string;
          content?: string;
          created_at?: string;
          deleted_at?: string | null;
          external_link_text?: string;
          external_url?: string;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          publication_date?: string;
          slug?: string;
          status?: Database['public']['Enums']['content_status'];
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'news_article_image_id_fkey';
            columns: ['article_image_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'news_image_id_fkey';
            columns: ['image_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
        ];
      };
      publications: {
        Row: {
          abstract: string;
          authors: string;
          citation: string;
          created_at: string;
          deleted_at: string | null;
          display_order: number;
          doi: string;
          featured: boolean;
          id: string;
          image_alt_text: string;
          image_id: string | null;
          journal: string;
          pdf_id: string | null;
          pmcid: string;
          pmid: string;
          preprint_url: string;
          publication_date: string;
          publication_type: string;
          publication_url: string;
          pubmed_url: string;
          slug: string;
          status: Database['public']['Enums']['content_status'];
          title: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          abstract?: string;
          authors?: string;
          citation?: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          doi?: string;
          featured?: boolean;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          journal?: string;
          pdf_id?: string | null;
          pmcid?: string;
          pmid?: string;
          preprint_url?: string;
          publication_date: string;
          publication_type?: string;
          publication_url?: string;
          pubmed_url?: string;
          slug: string;
          status?: Database['public']['Enums']['content_status'];
          title: string;
          updated_at?: string;
        };
        Update: {
          abstract?: string;
          authors?: string;
          citation?: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          doi?: string;
          featured?: boolean;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          journal?: string;
          pdf_id?: string | null;
          pmcid?: string;
          pmid?: string;
          preprint_url?: string;
          publication_date?: string;
          publication_type?: string;
          publication_url?: string;
          pubmed_url?: string;
          slug?: string;
          status?: Database['public']['Enums']['content_status'];
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'publications_image_id_fkey';
            columns: ['image_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'publications_pdf_id_fkey';
            columns: ['pdf_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
        ];
      };
      research_areas: {
        Row: {
          created_at: string;
          deleted_at: string | null;
          display_order: number;
          id: string;
          image_alt_text: string;
          image_id: string | null;
          introductory_text: string;
          slug: string;
          status: Database['public']['Enums']['content_status'];
          title: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          introductory_text?: string;
          slug: string;
          status?: Database['public']['Enums']['content_status'];
          title: string;
          updated_at?: string;
        };
        Update: {
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          introductory_text?: string;
          slug?: string;
          status?: Database['public']['Enums']['content_status'];
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'research_areas_image_id_fkey';
            columns: ['image_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
        ];
      };
      research_project_publications: {
        Row: {
          display_order: number;
          project_id: string;
          publication_id: string;
        };
        ComputedFields: never;
        Insert: {
          display_order?: number;
          project_id: string;
          publication_id: string;
        };
        Update: {
          display_order?: number;
          project_id?: string;
          publication_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'research_project_publications_project_id_fkey';
            columns: ['project_id'];
            isOneToOne: false;
            referencedRelation: 'research_projects';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'research_project_publications_publication_id_fkey';
            columns: ['publication_id'];
            isOneToOne: false;
            referencedRelation: 'publications';
            referencedColumns: ['id'];
          },
        ];
      };
      research_projects: {
        Row: {
          area_id: string;
          created_at: string;
          deleted_at: string | null;
          display_order: number;
          id: string;
          image_alt_text: string;
          image_id: string | null;
          main_content: string;
          nav_label: string;
          slug: string;
          status: Database['public']['Enums']['content_status'];
          title: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          area_id: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          main_content?: string;
          nav_label?: string;
          slug: string;
          status?: Database['public']['Enums']['content_status'];
          title: string;
          updated_at?: string;
        };
        Update: {
          area_id?: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          id?: string;
          image_alt_text?: string;
          image_id?: string | null;
          main_content?: string;
          nav_label?: string;
          slug?: string;
          status?: Database['public']['Enums']['content_status'];
          title?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'research_projects_area_id_fkey';
            columns: ['area_id'];
            isOneToOne: false;
            referencedRelation: 'research_areas';
            referencedColumns: ['id'];
          },
          {
            foreignKeyName: 'research_projects_image_id_fkey';
            columns: ['image_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
        ];
      };
      site_content: {
        Row: {
          content_key: string;
          content_value: string;
          display_order: number;
          format: string;
          label: string;
          page: string;
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          content_key: string;
          content_value?: string;
          display_order?: number;
          format?: string;
          label: string;
          page: string;
          updated_at?: string;
        };
        Update: {
          content_key?: string;
          content_value?: string;
          display_order?: number;
          format?: string;
          label?: string;
          page?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      team_members: {
        Row: {
          biography: string;
          created_at: string;
          deleted_at: string | null;
          display_order: number;
          email: string;
          external_links: NonNullable<Json>;
          id: string;
          joined: string;
          member_status: string;
          name: string;
          photograph_alt_text: string;
          photograph_id: string | null;
          position: string;
          research_interests: string;
          slug: string;
          status: Database['public']['Enums']['content_status'];
          updated_at: string;
        };
        ComputedFields: never;
        Insert: {
          biography?: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          email?: string;
          external_links?: NonNullable<Json>;
          id?: string;
          joined?: string;
          member_status?: string;
          name: string;
          photograph_alt_text?: string;
          photograph_id?: string | null;
          position?: string;
          research_interests?: string;
          slug: string;
          status?: Database['public']['Enums']['content_status'];
          updated_at?: string;
        };
        Update: {
          biography?: string;
          created_at?: string;
          deleted_at?: string | null;
          display_order?: number;
          email?: string;
          external_links?: NonNullable<Json>;
          id?: string;
          joined?: string;
          member_status?: string;
          name?: string;
          photograph_alt_text?: string;
          photograph_id?: string | null;
          position?: string;
          research_interests?: string;
          slug?: string;
          status?: Database['public']['Enums']['content_status'];
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'team_members_photograph_id_fkey';
            columns: ['photograph_id'];
            isOneToOne: false;
            referencedRelation: 'media';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      is_admin: { Args: Record<PropertyKey, never>; Returns: boolean };
      media_usage: {
        Args: { target: string };
        Returns: {
          field: string;
          kind: string;
          record_id: string;
          title: string;
        }[];
      };
    };
    Enums: {
      content_status: 'draft' | 'published';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, '__InternalSupabase'>;

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] & DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema['Tables'] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema['Enums'] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    keyof DefaultSchema['CompositeTypes'] | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof DatabaseWithoutInternals }
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      content_status: ['draft', 'published'],
    },
  },
} as const;
